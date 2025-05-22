import { FC } from 'react'
import './button.scss'

type ButtonProps = {
    text: string
    isWhite?: boolean
    additionalClass?: string
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button: FC<ButtonProps> = ({
    text,
    isWhite,
    additionalClass,
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            className={`btn ${isWhite ? 'btn-white' : ''} ${additionalClass}`}
        >
            {text}
        </button>
    )
}
