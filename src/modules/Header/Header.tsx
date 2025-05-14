import { Button } from '@/UI/Button/Button'
import './header.scss'

export const Header = () => {
    return (
        <header className="header">
            <h1>My Blog</h1>
            <div className="buttons-block">
                <Button text={'Войти'} isWhite={true} />
                <Button text={'Создать аккаунт'} />
            </div>
        </header>
    )
}
