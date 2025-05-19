import { FC } from 'react'
import './button.scss'

type ButtonProps = {
    text: string
    isWhite?: boolean
    additionalClass?: string
}

export const Button: FC<ButtonProps> = ({ text, isWhite, additionalClass }) => {
    return (
        <button
            className={`btn ${isWhite ? 'btn-white' : ''} ${additionalClass}`}
        >
            {text}
        </button>
    )
}
