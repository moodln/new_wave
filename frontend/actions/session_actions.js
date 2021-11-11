import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

export const login = (user) => (dispatch) => {
    return SessionApiUtil.login(user)
        .then((currentUser) => dispatch(receiveCurrentUser(currentUser)))
        .fail(errors => dispatch(receiveErrors(errors)))
}

export const logout = () => (dispatch) => {
    return SessionApiUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
        .fail(errors => dispatch(receiveErrors(errors)))
}

export const signup = (user) => (dispatch) => {
    return SessionApiUtil.signup(user)
        .then((currentUser) => dispatch(receiveCurrentUser(currentUser)))
        .fail(errors => dispatch(receiveErrors(errors)))
}

export const edit = (user, formData) => (dispatch) => {
    debugger
    return SessionApiUtil.edit(user, formData)
        .then((user) => dispatch(receiveCurrentUser(user)))
        .fail(errors => dispatch(receiveErrors(errors)))
}
