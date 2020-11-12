import { combineReducers } from 'redux';
import login from 'login/redux/reducer';
import welcome from 'views/welcome/redux/reducer';
import products from 'views/products/redux/reducer';



const reducer = combineReducers({
    login,
    welcome,
    products,
})

export default reducer;