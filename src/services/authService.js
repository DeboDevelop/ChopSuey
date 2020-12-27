import httpHandler from "../utils/httpHandler"

export const authenticateUser = (data) => {
    return httpHandler('/login', 'POST', data)
}

export const createUser = (data) => {
    return httpHandler('/signup', 'POST', data)
}
