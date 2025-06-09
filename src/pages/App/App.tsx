import { Outlet } from 'react-router'
import { Header } from '@/modules/Header/Header'
import { Footer } from '@/modules/Footer/Footer'

import './app.scss'
import { useAppDispatch } from '@/store/hooks'
import { useEffect } from 'react'
import { fetchAuthMe } from '@/store/slices/auth'

export const App = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchAuthMe())
    })
    return (
        <div className="app">
            <Header />
            <div className="wrapper">
                <main className="main">
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    )
}
