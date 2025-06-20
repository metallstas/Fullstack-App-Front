import { FC, useState } from 'react'
import { Input } from '@/UI/Input/Input'
import { Button } from '@/UI/Button/Button'

import user from '@/UI/images/user.png'
import './register.scss'
import { Eye } from '@/components/Eye/Eye'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { checkValidEmail, checkValidName, checkValidPass } from '@/validation'
import { fetchRegister } from '@/store/slices/register'
import { fetchUserData } from '@/store/slices/auth'
import { Navigate } from 'react-router'
import { ROUTES } from '@/routes/routes'

const Register: FC = () => {
    const dispatch = useAppDispatch()
    const isAuth = useAppSelector((state) => state.auth.isAuth)
    const regError = useAppSelector((state) => state.register.error)
    const [submit, setSubmit] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')
    const [visiblePassword, setVisiblePassword] = useState(false)
    const [errorName, setErrorName] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')

    const errorBorder = (error: string) => {
        if (error !== 'ok' && error !== '') {
            return 'error-border'
        }
        return ''
    }

    const handlerName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.currentTarget.value
        setUserName(name)
        if (submit) {
            setErrorName(checkValidName(name))
        }
    }
    const handlerEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const email = e.currentTarget.value
        setEmail(email)
        if (submit) {
            setErrorEmail(checkValidEmail(email))
        }
    }
    const handlerPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const password = e.currentTarget.value
        setPassword(password)
        if (submit) {
            setErrorPassword(checkValidPass(password))
        }
    }
    const handlerVisible = () => {
        setVisiblePassword((prev) => !prev)
    }

    const handlerSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setErrorEmail(checkValidEmail(email))
        setErrorName(checkValidName(userName))
        setErrorPassword(checkValidPass(password))
        setSubmit(true)
        const isValid =
            checkValidEmail(email) === 'ok' &&
            checkValidName(userName) === 'ok' &&
            checkValidPass(password) === 'ok'
        if (!isValid) {
            return
        }

        const data = { email, password, fullName: userName }
        const res = dispatch(fetchRegister(data))
        res.then((res) => {
            if (res.meta.requestStatus !== 'rejected') {
                dispatch(
                    fetchUserData({
                        email: email,
                        password: password,
                    })
                )
                setEmail('')
                setPassword('')
                setUserName('')
            }
        })
    }

    if (isAuth) {
        return <Navigate to={ROUTES.HOME} />
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
                    <label className="register__password register__password__last">
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

                    {regError ? (
                        <span className="register__error register__error__serv">
                            {regError}
                        </span>
                    ) : null}

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
