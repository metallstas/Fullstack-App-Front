export const checkValidEmail: (email: string) => string = (email) => {
    const regex = /@/g
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

    return 'ok'
}

export const checkValidPass: (password: string) => string = (password) => {
    if (password === '') {
        return 'Не может быть пустым'
    }
    return 'ok'
}
