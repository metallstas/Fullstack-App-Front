import { ToolsText } from '@/components/ToolsText/ToolsText'
import { useRef, useState } from 'react'

import './text-editor.scss'
import { useAppSelector } from '@/store/hooks'

export const TextEditor = () => {
	const [text, setText] = useState<string>('')
	const textRef = useRef<HTMLDivElement>(null)
	const isBold = useAppSelector((state) => state.textEditor.bold)
	const isItalic = useAppSelector((state) => state.textEditor.italic)
	const range = new Range()

	const b = () => {
		console.dir(navigator.clipboard)
	}

	b()

	return (
		<section className="text-editor">
			<ToolsText />
			<div
				ref={textRef}
				contentEditable={true}
				onInput={(e) => console.log(e.currentTarget.textContent)}
				className={`text-editor__text`}
				aria-placeholder="Текс поста"
			></div>
		</section>
	)
}
