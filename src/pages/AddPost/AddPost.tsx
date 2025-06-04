import { Button } from '@/UI/Button/Button'
import { Input } from '@/UI/Input/Input'
import { TextEditor } from '@/modules/TextEditor/TextEditor'

import './add-post.scss'
//comment
const AddPost = () => {
	return (
		<section className="add-post">
			<div className="add-post__container">
				<Button
					onClick={() => {}}
					text="Загрузить превью"
					additionalClass="add-post__btn"
				/>
				<Input
					onChange={() => {}}
					value=""
					customClass="add-post__title"
					type={'text'}
					placeholder="Заголовок статьи"
				/>
				<Input
					onChange={() => {}}
					value=""
					customClass="add-post__tags"
					type={'text'}
					placeholder="#Тэги"
				/>
				<TextEditor />
			</div>
		</section>
	)
}

export const Component = AddPost
