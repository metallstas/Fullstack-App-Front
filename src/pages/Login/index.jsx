import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'

import styles from './Login.module.scss'
import { useLoginMutation } from '../../redux/userApi'
import { Navigate } from 'react-router'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [login, { data, isError, isLoading, error }] = useLoginMutation()
    const onSubmit = async (e) => {
        e.preventDefault()
        await login({ email, password }).unwrap()
    }
    console.log('state', data)
    if (data) {
        return <Navigate to="/" />
    }
    return (
        <Paper elevation={0} classes={{ root: styles.root }}>
            <Typography classes={{ root: styles.title }} variant="h5">
                Вход в аккаунт
            </Typography>
            <form onSubmit={onSubmit}>
                <TextField
                    className={styles.field}
                    label="E-Mail"
                    // error={isError}
                    helperText={''}
                    fullWidth
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    className={styles.field}
                    label="Пароль"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    type="submit"
                    size="large"
                    variant="contained"
                    fullWidth
                >
                    Войти
                </Button>
            </form>
        </Paper>
    )
}
