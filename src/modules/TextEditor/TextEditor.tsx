import { ToolsText } from '@/components/ToolsText/ToolsText'
import { useRef, useState } from 'react'

import './text-editor.scss'

export const TextEditor = () => {
    const [text, setText] = useState<string>('')
    const textRef = useRef<HTMLDivElement>(null)

    return (
        <section className="text-editor">
            <ToolsText />
            <div
                ref={textRef}
                contentEditable={true}
                onChange={() => setText('')}
                className={`text-editor__text`}
            ></div>
        </section>
    )
}
