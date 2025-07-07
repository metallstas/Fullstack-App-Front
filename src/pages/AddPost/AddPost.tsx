import { Button } from '@/UI/Button/Button'
import { Input } from '@/UI/Input/Input'
import { TextEditor } from '@/modules/TextEditor/TextEditor'

import './add-post.scss'
import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import {
    fetchNewPost,
    fetchPostById,
    fetchUpdatePost,
} from '@/store/slices/posts'
import { PathParams, ROUTES } from '@/routes/routes'
import { useAppDispatch, useAppSelector } from '@/store/hooks'

const AddPost = () => {
    const params = useParams<PathParams[typeof ROUTES.POST_REDACT]>()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const postRedact = useAppSelector((state) => state.posts.postById)
    const [title, setTitle] = useState('')
    const [error, setError] = useState('')
    const [tags, setTags] = useState('')
    const [text, setText] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const refFile = useRef<HTMLInputElement>(null)
    const isEditing = Boolean(params.postId)

    useEffect(() => {
        if (params.postId) {
            dispatch(fetchPostById(params.postId))
        } else {
            setTitle('')
            setText('')
            setImageUrl('')
            setTags('')
        }
    }, [params.postId])

    useEffect(() => {
        if (params.postId && postRedact) {
            setImageUrl(`${postRedact.imageUrl}`)
            setTitle(postRedact.title)
            setText(postRedact.text)
            setTags(postRedact.tags.join(', '))
        }
    }, [postRedact])

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
        const tagsArr = tags
            .split(/\,|\#|\, |\ |\ #/g)
            .filter((el) => el !== '')

        const fields = {
            title,
            text,
            imageUrl,
            tags: tagsArr,
        }

        if (isEditing) {
        }

        const res =
            isEditing && params.postId
                ? await fetchUpdatePost(params.postId, fields)
                : await fetchNewPost(fields)

        if (res[0]?.msg) {
            setError(res[0]?.msg)
            return
        }
        if (isEditing) {
            navigate(`/post/${params.postId}`)
            return
        }
        if (res._id) {
            navigate(`/post/${res._id}`)
            return
        }
    }

    const handlerTags = (e: React.ChangeEvent<HTMLInputElement>) => {
        const tags = e.currentTarget.value
        setTags(tags)
    }

    return (
        <section className="add-post">
            <div className="add-post__container">
                <span className="add-post__error">{error}</span>
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
                <Button
                    text={isEditing ? 'Сохранить' : 'Опубликовать'}
                    onClick={onSubmit}
                />
                <Button text="Отмена" onClick={() => {}} />
            </div>
        </section>
    )
}

export const Component = AddPost
