import * as actions from 'shared/redux/constants';

export const starts = () => {
    return {
        type: actions.PRODUCTS_REQUEST_STARTS
    }
}

export const ends = () => {
    return {
        type: actions.PRODUCTS_REQUEST_ENDS
    }
}

export const fails = (error) => {
    return {
        type: actions.PRODUCTS_REQUEST_FAILED,
        payload: error
    }
}

export const success = (response) => {
    return {
        type: actions.PRODUCTS_REQUEST_SUCCESS,
        payload: response
    }
}


export const fetch = () => {
    return {
        type: actions.PRODUCTS_PERFORME_FETCH,
    }
}

export const reset = () => {
    return {
        type: actions.PRODUCTS_RESET_STATE
    }
}