import * as actions from "shared/redux/constants";

const initialState = {
    requesting: false,
    error: null,
    data: null
};

const reducer = (state = initialState, action) => {
    let newState = null;

    switch (action.type) {
        case actions.PRODUCTS_REQUEST_STARTS:
            newState = {
                ...state,
                requesting: true,
                error: false
            };
            break;

        case actions.PRODUCTS_REQUEST_SUCCESS:
            newState = {
                ...state,
                data: action.payload
            };
            break;

        case actions.PRODUCTS_REQUEST_FAILED:
            newState = {
                ...state,
                ...action.payload
            };
            break;

        case actions.PRODUCTS_REQUEST_ENDS:
            newState = {
                ...state,
                requesting: false
            };
            break;

        case actions.PRODUCTS_RESET_STATE:
            newState = {
                ...state,
                requesting: false,
                error: null
            };
            break;

        default:
            newState = state;
            break;
    }

    return newState;
};

export default reducer;
