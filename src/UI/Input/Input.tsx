import React, { FC } from 'react'
import './input.scss'

type InputProps = {
    placeholder?: string
    customClass?: string
    type?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
    value: string
}

export const Input: FC<InputProps> = ({
    type,
    placeholder,
    customClass,
    onChange,
    onFocus,
    value,
}) => {
    return (
        <input
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            type={type ? type : 'text'}
            placeholder={placeholder}
            className={`input ${customClass}`}
        />
    )
}
