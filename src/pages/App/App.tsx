import { Outlet } from 'react-router'
import { Header } from '@/modules/Header/Header'
import { Footer } from '@/modules/Footer/Footer'

import './app.scss'

export const App = () => {
    return (
        <div className="app">
            <Header />
            <main className="main">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
