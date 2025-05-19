import { useState } from 'react'

import { Button } from '@/UI/Button/Button'
import { Input } from '@/UI/Input/Input'

import './add-post.scss'
import { TextEditor } from '@/components/TextEditor/TextEditor'

const AddPost = () => {
	const [text, setText] = useState<string>('')
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
				<TextEditor />
				<textarea
					onChange={(e) => setText(e.target.value)}
					value={text}
					className="add-post__text"
					placeholder="Текст Поста"
				/>
			</div>
		</section>
	)
}

export const Component = AddPost
