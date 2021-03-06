import * as actions from 'shared/redux/constants';

export const starts = () => {
    return {
        type: actions.LOGIN_REQUEST_STARTS
    }
}

export const ends = () => {
    return {
        type: actions.LOGIN_REQUEST_ENDS
    }
}

export const fails = (error) => {
    return {
        type: actions.LOGIN_REQUEST_FAILED,
        payload: error
    }
}

export const success = (response) => {
    return {
        type: actions.LOGIN_REQUEST_SUCCESS,
        payload: response
    }
}

export const logout = () => {
    return {
        type: actions.LOGIN_LOGOUT
    }
}

export const attempt = (payload) => {
    return {
        type: actions.LOGIN_PERFORM_LOGIN,
        payload: payload
    }
}

export const reset = () => {
    return {
        type: actions.LOGIN_RESET_STATE
    }
}