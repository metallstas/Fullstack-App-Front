import { Input } from '@/UI/Input/Input'
import { Button } from '@/UI/Button/Button'
import { useState } from 'react'
import { Eye } from '@/components/Eye/Eye'

import './login.scss'
import { useAppSelector } from '@/store/hooks'

const Login = () => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const visiblePass = useAppSelector((state) => state.auth.visiblePass)

	const visible = visiblePass ? 'text' : 'password'

	const handlerChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value)
	}

	const handlerChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value)
	}

	return (
		<section className="login">
			<h3>Вход в аккаунт</h3>
			<form className="login__form">
				<Input
					onChange={handlerChangeEmail}
					value={email}
					customClass="login__input login__input__email"
					type={'email'}
					placeholder="E-mail"
				/>
				{/* <div className="login__wrapper-pass"> */}
				<label className="login__wrapper-pass">
					<Input
						onChange={handlerChangePassword}
						value={password}
						customClass="login__input login__input__password"
						type={visible}
						placeholder="Пароль"
					/>
					<Eye customClass="login__eye" />
				</label>

				{/* </div> */}

				<Button text={'Войти'} />
			</form>
		</section>
	)
}

export const Component = Login
