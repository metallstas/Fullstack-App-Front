import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useState } from 'react'

import { Input } from '@/UI/Input/Input'
import { Button } from '@/UI/Button/Button'
import { Eye } from '@/components/Eye/Eye'

import './login.scss'
import { checkValidEmail, checkValidPass } from '@/validation'
import { fetchUserData } from '@/store/slices/auth'
import { Navigate } from 'react-router'
import { ROUTES } from '@/routes/routes'

const Login = () => {
    const dispatch = useAppDispatch()
    const error = useAppSelector((state) => state.auth.error)
    const isAuth = useAppSelector((state) => state.auth.isAuth)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [visiblePass, setVisiblePass] = useState(false)
    const [validEmail, setValidEmail] = useState<string>('')
    const [validPassword, setValidPassword] = useState<string>('')
    const [isSubmit, setIsSubmit] = useState(false)

    const errorClassEmail =
        validEmail !== 'ok' && validEmail !== '' ? 'error' : ''
    const errorClassPassword =
        validPassword !== 'ok' && validPassword !== '' ? 'error' : ''

    const handlerChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const email = e.currentTarget.value
        setEmail(email)
        if (isSubmit) {
            setValidEmail(checkValidEmail(email))
        }
    }

    const handlerChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const password = e.currentTarget.value
        setPassword(password)
        if (isSubmit) {
            setValidPassword(checkValidPass(password))
        }
    }

    const handlerSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setIsSubmit(true)
        if (
            checkValidEmail(email) === 'ok' &&
            checkValidPass(password) === 'ok'
        ) {
            dispatch(fetchUserData({ email, password }))
            return
        }

        setValidEmail(checkValidEmail(email))
        setValidPassword(checkValidPass(password))

        checkValidPass(password)
        console.log('submit')
    }

    const handlerVisible = () => {
        setVisiblePass((prev) => !prev)
    }

    if (isAuth) {
        return <Navigate to={ROUTES.HOME} />
    }

    return (
        <section className="login">
            <h3>Вход в аккаунт</h3>
            <form className="login__form">
                <div className="login__wrapper">
                    <label className="login__label">
                        <Input
                            onChange={handlerChangeEmail}
                            value={email}
                            customClass={`login__input ${errorClassEmail}`}
                            type={'email'}
                            placeholder="E-mail"
                        />
                        {validEmail !== 'ok' ? (
                            <span className="login__error">{validEmail}</span>
                        ) : null}
                    </label>

                    <label className="login__label">
                        <Input
                            onChange={handlerChangePassword}
                            value={password}
                            customClass={`login__input ${errorClassPassword}`}
                            type={visiblePass ? 'text' : 'password'}
                            placeholder="Пароль"
                        />
                        <Eye
                            visible={visiblePass}
                            customClass="login__eye"
                            onClick={handlerVisible}
                        />
                        {validPassword !== 'ok' ? (
                            <span className="login__error">
                                {validPassword}
                            </span>
                        ) : null}
                    </label>
                </div>
                {isSubmit ? (
                    <div className="login__server-error">{error}</div>
                ) : null}

                <Button onClick={handlerSubmit} text={'Войти'} />
            </form>
        </section>
    )
}

export const Component = Login
