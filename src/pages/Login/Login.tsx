import { Input } from '@/UI/Input/Input'
import './login.scss'
import { Button } from '@/UI/Button/Button'
import { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handlerChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handlerChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    return (
        <section className="login">
            <h3>Вход в аккаунт</h3>
            <form>
                <Input
                    onChange={handlerChangeEmail}
                    value={email}
                    customClass="login__input login__email"
                    type={'email'}
                    placeholder="E-mail"
                />
                <Input
                    onChange={handlerChangePassword}
                    value={password}
                    customClass="login__input login__password"
                    type={'password'}
                    placeholder="Пароль"
                />

                <Button text={'Войти'} />
            </form>
        </section>
    )
}

export const Component = Login
