import { Button } from '@/UI/Button/Button'
import { Input } from '@/UI/Input/Input'
import { TextEditor } from '@/modules/TextEditor/TextEditor'

import './add-post.scss'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router'

const AddPost = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [tags, setTags] = useState('')
    const [text, setText] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const refFile = useRef<HTMLInputElement>(null)

    const handlerChangeFile = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        try {
            const formData = new FormData()
            const files = e.currentTarget.files
            if (files) {
                formData.append('image', files[0])
                const response = await fetch('http://localhost:4444/upload', {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${window.localStorage.getItem(
                            'token'
                        )}`,
                    },
                    body: formData,
                })

                if (response.ok) {
                    const res = await response.json()
                    setImageUrl(await res.urlImage)
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handlerRemoveImage = () => setImageUrl('')

    const onSubmit = async () => {
        try {
            setIsLoading(true)
            const tagsArr = tags
                .split(/\,|\#|\, |\ |\ #/g)
                .filter((el) => el !== '')

            const fields = {
                title,
                text,
                imageUrl,
                tags: tagsArr,
            }

            console.log('fields', fields)
            const response = await fetch('http://localhost:4444/posts', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${window.localStorage.getItem(
                        'token'
                    )}`,
                },
                body: JSON.stringify(fields),
            })

            const res = await response.json()
            const id = await res._id
            navigate(`/post/${id}`)
        } catch (error) {
            console.log('Error create post')
        }
    }

    const handlerTags = (e: React.ChangeEvent<HTMLInputElement>) => {
        const tags = e.currentTarget.value
        setTags(tags)
    }

    return (
        <section className="add-post">
            <div className="add-post__container">
                <Button
                    onClick={() => refFile.current?.click()}
                    text="Загрузить превью"
                    additionalClass="add-post__btn"
                />
                <input
                    type="file"
                    onChange={handlerChangeFile}
                    ref={refFile}
                    hidden
                />
                {imageUrl ? (
                    <>
                        <img
                            className={'add-post__img'}
                            src={`http://localhost:4444${imageUrl}`}
                        />
                        <Button
                            additionalClass="add-post__delete-img"
                            onClick={handlerRemoveImage}
                            text={'Удалить изображение'}
                        />
                    </>
                ) : null}
                <Input
                    onChange={(e) => setTitle(e.currentTarget.value)}
                    value={title}
                    customClass="add-post__title"
                    type={'text'}
                    placeholder="Заголовок статьи"
                />
                <Input
                    onChange={handlerTags}
                    value={tags}
                    customClass="add-post__tags"
                    type={'text'}
                    placeholder="#Тэги"
                />
                <TextEditor setText={setText} text={text} />
            </div>
            <div className="add-post__submit-btns">
                <Button text="Опубликовать" onClick={onSubmit} />
                <Button text="Отмена" onClick={() => {}} />
            </div>
        </section>
    )
}

export const Component = AddPost
