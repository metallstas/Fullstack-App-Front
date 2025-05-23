import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setEmail, setPassword, visiblePass } from '@/store/slices/auth'

import { Input } from '@/UI/Input/Input'
import { Button } from '@/UI/Button/Button'
import { Eye } from '@/components/Eye/Eye'

import './login.scss'

const Login = () => {
    const dispatch = useAppDispatch()
    const email = useAppSelector((state) => state.auth.email)
    const password = useAppSelector((state) => state.auth.password)
    const validEmail = useAppSelector((state) => state.auth.validEmail)
    const validPassword = useAppSelector((state) => state.auth.validPassword)
    const visible = useAppSelector((state) => state.auth.visiblePass)
    const errorClassEmail =
        validEmail !== 'ok' && validEmail !== '' ? 'error' : ''
    const errorClassPassword =
        validPassword !== 'ok' && validPassword !== '' ? 'error' : ''

    const handlerChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const emailNew = e.target.value
        dispatch(setEmail({ email: emailNew }))
    }

    const handlerChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setPassword({ password: e.target.value }))
    }

    const handlerSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log('submit')
    }

    const handlerVisible = () => {
        dispatch(visiblePass())
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
                            type={visible ? 'text' : 'password'}
                            placeholder="Пароль"
                        />
                        <Eye
                            visible={visible}
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

                <Button onClick={handlerSubmit} text={'Войти'} />
            </form>
        </section>
    )
}

export const Component = Login
