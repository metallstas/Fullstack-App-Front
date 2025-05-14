import { FC } from 'react'
import './button.scss'

type ButtonProps = {
    text: string
    isWhite?: boolean
}

export const Button: FC<ButtonProps> = ({ text, isWhite }) => {
    return (
        <button className={`btn ${isWhite ? 'btn-white' : ''}`}>{text}</button>
    )
}
