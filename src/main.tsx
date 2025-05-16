import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { router } from './routes/router'
import { Provider } from 'react-redux'
import { store } from './store/store'

import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
)
