import { FC, useState } from 'react'
import { Input } from '@/UI/Input/Input'
import { Button } from '@/UI/Button/Button'

import user from '@/UI/images/user.png'
import './register.scss'
import { Eye } from '@/components/Eye/Eye'
import { useAppDispatch } from '@/store/hooks'
import { checkValidEmail, checkValidName, checkValidPass } from '@/validation'

const Register: FC = () => {
    const dispatch = useAppDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')
    const [visiblePassword, setVisiblePassword] = useState(false)
    const [errorName, setErrorName] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')

    const errorBorder = (error: string) => {
        if (error !== 'ok' && error !== '') {
            return 'register__error-border'
        }
        return ''
    }
    console.log(errorEmail)
    const handlerName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.currentTarget.value
        setUserName(name)
        setErrorName(checkValidName(name))
    }
    const handlerEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const email = e.currentTarget.value
        setEmail(email)
        setErrorEmail(checkValidEmail(email))
    }
    const handlerPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const password = e.currentTarget.value
        setPassword(password)
        setErrorPassword(checkValidPass(password))
    }
    const handlerVisible = () => {
        setVisiblePassword((prev) => !prev)
    }

    const handlerSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setErrorEmail(checkValidEmail(email))
        setErrorName(checkValidName(userName))
        setErrorPassword(checkValidPass(password))
        const isValid =
            checkValidEmail(email) === 'ok' &&
            checkValidName(userName) === 'ok' &&
            checkValidPass(password) === 'ok'
        console.log(isValid)
        // if ()
    }

    return (
        <section className="register">
            <div className="register__wrapper">
                <h3>Создание аккаунта</h3>
                <img className="register__img" src={user} alt="user-img" />
                <form>
                    <label className="register__password">
                        <Input
                            type="text"
                            placeholder="Полное имя"
                            customClass={`${errorBorder(errorName)}`}
                            value={userName}
                            onChange={handlerName}
                        />
                        {errorName !== 'ok' ? (
                            <span className="register__error">{errorName}</span>
                        ) : null}
                    </label>

                    <label className="register__password">
                        <Input
                            customClass={`${errorBorder(errorEmail)}`}
                            placeholder="E-mail"
                            type="email"
                            value={email}
                            onChange={handlerEmail}
                        />
                        {errorEmail !== 'ok' ? (
                            <span className="register__error">
                                {errorEmail}
                            </span>
                        ) : null}
                    </label>

                    <span></span>
                    <label className="register__password__last">
                        <Input
                            customClass={`${errorBorder(errorPassword)}`}
                            type={visiblePassword ? 'text' : 'password'}
                            placeholder="Пароль"
                            value={password}
                            onChange={handlerPassword}
                        />
                        <Eye
                            customClass="register__password-visible"
                            visible={visiblePassword}
                            onClick={handlerVisible}
                        />
                        {errorPassword !== 'ok' ? (
                            <span className="register__error">
                                {errorPassword}
                            </span>
                        ) : null}
                    </label>

                    <div>
                        <Button
                            text="Зарегестрироваться"
                            onClick={handlerSubmit}
                        />
                    </div>
                </form>
            </div>
        </section>
    )
}

export const Component = Register
