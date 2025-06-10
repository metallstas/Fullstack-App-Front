import { ROUTES } from '@/routes/routes'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { logout } from '@/store/slices/auth'
import { CustomLink } from '@/UI/Link/CustomLink'

import './header.scss'

export const Header = () => {
    const isAuth = useAppSelector((state) => state.auth.isAuth)
    const fullName = useAppSelector((state) => state.auth.fullName)
    const dispatch = useAppDispatch()
    const handlerLogout = () => {
        if (window.confirm('Вы действительно хотите выйти?')) dispatch(logout())
    }
    return (
        <header className="header">
            <div className="header__container">
                <CustomLink
                    customClass="header__home"
                    to={ROUTES.HOME}
                    text={fullName ? fullName : 'My Blog'}
                />
                <div className="buttons-block">
                    {isAuth ? (
                        <>
                            <CustomLink
                                to={ROUTES.ADD_POST}
                                text={'Написать пост'}
                                customClass="header__post"
                            />
                            <CustomLink
                                onClick={handlerLogout}
                                to={ROUTES.HOME}
                                text={'Выйти'}
                                customClass="header__logout"
                            />
                        </>
                    ) : (
                        <>
                            <CustomLink
                                to={ROUTES.LOGIN}
                                text={'Войти'}
                                customClass="header__login"
                            />
                            <CustomLink
                                to={ROUTES.REGISTER}
                                text={'Создать аккаунт'}
                            />
                        </>
                    )}
                </div>
            </div>
        </header>
    )
}
