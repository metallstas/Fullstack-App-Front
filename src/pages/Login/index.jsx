import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined'

import styles from './Login.module.scss'
import { useLoginMutation } from '../../redux/userApi'
import { Navigate } from 'react-router'

export const Login = () => {
    const EMAIL_REGEXP =
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [focusEmail, setFocusEmail] = useState(false)
    const [focusPassword, setFocusPassword] = useState(false)
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [visiblePass, setVisiblePass] = useState(false)
    const [typePass, setTypePass] = useState('password')

    const [login, { data, isLoading, error }] = useLoginMutation()
    const onSubmit = async (e) => {
        e.preventDefault()
        if (!email || !password) {
            setFocusEmail(true)
            setErrorEmail('Email не может быть пустым')
            setFocusPassword(true)
            setErrorPassword('Пароль не может быть пустым')
            return
        }
        await login({ email, password }).unwrap()
    }

    if (data) {
        return <Navigate to="/" />
    }

    const handlerEmail = (e) => {
        if (!e.target.value) {
            setErrorEmail('Email не может быть пустым')
        } else if (!EMAIL_REGEXP.test(e.target.value)) {
            setErrorEmail('Некорректный email')
        } else {
            setErrorEmail('')
        }
        setEmail(e.target.value)
    }

    const handlerPassword = (e) => {
        if (e.target.value.length < 5) {
            setErrorPassword('Пароль должен быть не менее 5 символов')
        } else if (e.target.value.length > 20) {
            setErrorPassword('Пароль должен быть не более 20 символов')
        } else if (!e.target.value) {
            setErrorPassword('Пароль не может быть пустым')
        } else {
            setErrorPassword('')
        }

        setPassword(e.target.value)
    }

    const handlerVisiblePass = () => {
        setTypePass((prev) => {
            return prev === 'password' ? 'text' : 'password'
        })
        setVisiblePass((prev) => !prev)
    }
    console.log(error)
    return (
        <Paper elevation={0} classes={{ root: styles.root }}>
            <Typography classes={{ root: styles.title }} variant="h5">
                Вход в аккаунт
            </Typography>
            <form onSubmit={onSubmit}>
                <TextField
                    className={styles.field}
                    label="E-Mail"
                    error={errorEmail}
                    helperText={focusEmail && errorEmail ? errorEmail : ''}
                    fullWidth
                    type="email"
                    onBlur={() => setFocusEmail(true)}
                    value={email}
                    onChange={handlerEmail}
                />
                <div className={styles.wrapperPassword}>
                    <TextField
                        className={styles.field}
                        label="Пароль"
                        fullWidth
                        type={typePass}
                        onBlur={() => setFocusPassword(true)}
                        error={errorPassword}
                        helperText={
                            focusPassword && errorPassword ? errorPassword : ''
                        }
                        value={password}
                        onChange={handlerPassword}
                    ></TextField>
                    <VisibilityOffOutlinedIcon
                        onClick={handlerVisiblePass}
                        className={
                            !visiblePass
                                ? styles.eye
                                : `${styles.eye} ${styles.hide}`
                        }
                    />
                    <VisibilityOutlinedIcon
                        onClick={handlerVisiblePass}
                        className={
                            visiblePass
                                ? styles.eye
                                : `${styles.eye} ${styles.hide}`
                        }
                    />
                </div>
                {isLoading ? (
                    <span className={styles.error}>
                        <CachedOutlinedIcon className={styles.loading} />
                    </span>
                ) : null}
                {error ? (
                    <span className={styles.error}>{error.data.message}</span>
                ) : null}
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
