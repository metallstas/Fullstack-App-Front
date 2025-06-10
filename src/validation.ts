export const checkValidEmail: (email: string) => string = (email) => {
    const regex = /@/g
    const dot = email.match(/\./g)
    const match = email.match(regex)
    if (email === '') {
        return 'Не может быть пустым'
    }
    if (match === null) {
        return 'email должен содержать @'
    }
    if (match.length > 1) {
        return 'Не может быть два символа @'
    }
    if (dot === null) {
        return 'Неверный формат почты'
    }

    return 'ok'
}

export const checkValidPass: (password: string) => string = (password) => {
    if (password === '') {
        return 'Не может быть пустым'
    }
    if (password.length < 5) {
        return 'Минимум 5 символов'
    }
    return 'ok'
}
