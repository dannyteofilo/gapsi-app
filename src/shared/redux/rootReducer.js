import { combineReducers } from 'redux';
import login from 'login/redux/reducer';
import welcome from 'views/welcome/redux/reducer'



const reducer = combineReducers({
    login:login,
    welcome:welcome,
})

export default reducer;