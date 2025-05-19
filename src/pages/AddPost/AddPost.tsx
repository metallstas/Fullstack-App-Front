import { Button } from '@/UI/Button/Button'
import { Input } from '@/UI/Input/Input'

import './add-post.scss'
import { TextPanel } from '@/components/TextPanel/TextPanel'

const AddPost = () => {
    return (
        <section className="add-post">
            <div className="add-post__container">
                <Button
                    text="Загрузить превью"
                    additionalClass="add-post__btn"
                />
                <Input
                    customClass="add-post__title"
                    type={'text'}
                    placeholder="Заголовок статьи"
                />
                <Input
                    customClass="add-post__tags"
                    type={'text'}
                    placeholder="#Тэги"
                />
                <TextPanel />
                <input placeholder="Текст Поста" />
            </div>
        </section>
    )
}

export const Component = AddPost
