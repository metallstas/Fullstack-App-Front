import { ToolsText } from '@/components/ToolsText/ToolsText'
import { FC } from 'react'

import './text-editor.scss'

type TextEditorPops = {
    setText: (value: string) => void
    text: string
}

export const TextEditor: FC<TextEditorPops> = ({ setText, text }) => {
    return (
        <section className="text-editor">
            <ToolsText />
            <textarea
                contentEditable={true}
                onChange={(e) => setText(e.currentTarget.value)}
                className={`text-editor__text`}
                value={text}
            ></textarea>
        </section>
    )
}
