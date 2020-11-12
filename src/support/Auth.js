import { getStore } from '../shared/redux/store';
import * as actions from 'login/redux/actions'

class Auth {

    constructor() {
        this._isAuthenticated = false;

        setTimeout(() => {
            this.store = getStore();

            this.login = this.store.getState().login;
        });
    }


    attempt(data) {
        return data;
    }

    isAuthenticated() {
        this._isAuthenticated = this.login.data ? this.login.data : false

        return this._isAuthenticated;
    }

    setData(data) {
        this.login = { data: data };
    }

    logout() {
        this.login.data = null;
        this._isAuthenticated = false;
        localStorage.clear()
        return this.store.dispatch(actions.logout());
    }

}

const auth = new Auth();

export default auth;