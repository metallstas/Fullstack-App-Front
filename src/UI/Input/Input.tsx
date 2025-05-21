import React, { FC } from 'react'
import './input.scss'

type InputProps = {
	placeholder?: string
	customClass?: string
	type?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	value: string
}

export const Input: FC<InputProps> = ({
	type,
	placeholder,
	customClass,
	onChange,
	value,
}) => {
	return (
		<input
			value={value}
			onChange={onChange}
			type={type ? type : 'text'}
			placeholder={placeholder}
			className={`input ${customClass}`}
		/>
	)
}
