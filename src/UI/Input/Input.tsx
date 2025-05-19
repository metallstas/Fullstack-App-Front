import { FC } from 'react'
import './input.scss'

type InputProps = {
    placeholder?: string
    customClass?: string
    type?: string
}

export const Input: FC<InputProps> = ({ type, placeholder, customClass }) => {
    return (
        <input
            type={type ? type : 'text'}
            placeholder={placeholder}
            className={`input ${customClass}`}
        />
    )
}
