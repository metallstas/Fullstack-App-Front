import { FC } from 'react'
import { Input } from '@/UI/Input/Input'
import { Button } from '@/UI/Button/Button'

import user from '@/UI/images/user.png'
import './register.scss'
import { Eye } from '@/components/Eye/Eye'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { email, name, password, visible } from '@/store/slices/register'

const Register: FC = () => {
    const dispatch = useAppDispatch()
    const visiblePass = useAppSelector((state) => state.register.visiblePass)
    const nameUser = useAppSelector((state) => state.register.name)
    const userEmail = useAppSelector((state) => state.register.email)
    const userPassword = useAppSelector((state) => state.register.password)

    const handlerName = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(name({ name: e.currentTarget.value }))
    }
    const handlerEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(email({ email: e.currentTarget.value }))
    }
    const handlerPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(password({ password: e.currentTarget.value }))
    }
    const handlerVisible = () => {
        dispatch(visible())
    }
    return (
        <section className="register">
            <div className="register__wrapper">
                <h3>Создание аккаунта</h3>
                <img className="register__img" src={user} alt="user-img" />
                <form>
                    <Input
                        type="text"
                        placeholder="Полное имя"
                        value={nameUser}
                        onChange={handlerName}
                    />
                    <Input
                        placeholder="E-mail"
                        type="email"
                        value={userEmail}
                        onChange={handlerEmail}
                    />
                    <label className="register__password">
                        <Input
                            type={visiblePass ? 'text' : 'password'}
                            placeholder="Пароль"
                            value={userPassword}
                            onChange={handlerPassword}
                        />
                        <Eye
                            customClass="register__password-visible"
                            visible={visiblePass}
                            onClick={handlerVisible}
                        />
                    </label>
                    <div>
                        <Button
                            text="Зарегестрироваться"
                            onClick={() => 'submit'}
                        />
                    </div>
                </form>
            </div>
        </section>
    )
}

export const Component = Register
