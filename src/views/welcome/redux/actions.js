import * as actions from 'shared/redux/constants';

export const starts = () => {
    return {
        type: actions.WELCOME_REQUEST_STARTS
    }
}

export const ends = () => {
    return {
        type: actions.WELCOME_REQUEST_ENDS
    }
}

export const fails = (error) => {
    return {
        type: actions.WELCOME_REQUEST_FAILED,
        payload: error
    }
}

export const success = (response) => {
    return {
        type: actions.WELCOME_REQUEST_SUCCESS,
        payload: response
    }
}


export const fetch = () => {
    return {
        type: actions.WELCOME_PERFORME_FETCH,
    }
}

export const reset = () => {
    return {
        type: actions.WELCOME_RESET_STATE
    }
}