import { ROUTES } from '@/routes/routes'
import { useAppSelector } from '@/store/hooks'
import { CustomLink } from '@/UI/Link/CustomLink'

import './header.scss'

export const Header = () => {
    const isAuth = useAppSelector((state) => state.auth.isAuth)
    return (
        <header className="header">
            <div className="header__container">
                <CustomLink
                    customClass="header__home"
                    to={ROUTES.HOME}
                    text="My Blog"
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
                                to={ROUTES.REGISTER}
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
