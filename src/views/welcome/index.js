import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import * as actions from './redux/actions';
import { connect } from 'react-redux';
import styles from "./styles";
import Header from 'components/header'
import Button from '@material-ui/core/Button';
import Auth from 'support/Auth';
import { Redirect } from 'react-router-dom';




class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            welcome: '',
            version: '',
            type: '',
            visitorId: '',
            redirect: null,
        }
    }

    componentDidMount() {
        this.props.dispatch(actions.fetch());
        const { data } = this.props
        if (data) {
            this.setState({ ...data })
        }
    }

    componentWillReceiveProps() {
        const { data } = this.props;
        if (data) {
            const { visitorId } = data;
            if (visitorId !== this.state.visitorId) {
                this.setState({ ...data })
            }
        }
    }

    onLogout() {
        console.log('logout: ');
        return Auth.logout() && this.props.history.replace("/auth/login");
    }

    onContinue() {
        console.log('on continue');
        this.setState({ redirect: '/products' })
    }
    render() {
        const { welcome, version, redirect } = this.state;
        if (redirect) {
            return <Redirect to={redirect} />
        }

        return (
            <div>
                <Header onClick={() => this.onLogout()}></Header>
                <div className='h-100 container'>
                    <div className='row flex-column  align-items-center'>
                        <div className='m-6 col-6 d-flex justify-content-center'>
                            <img src="http://www.grupoasesores.com.mx/img/logo.png" alt="" />
                        </div>
                        <div className='m-2 col-6 d-flex justify-content-center'>
                            <h4>{welcome}</h4>
                        </div>
                        <div className='m-2 h-25 d-flex justify-content-center'>
                            <Button variant="contained" color="secondary" onClick={() => this.onContinue()}>
                                Continuar
                            </Button>
                        </div>
                        <div className='m-3 h-25 card col-12'>
                            <div className='d-flex justify-content-end'>
                                {version}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}


const mapStateToProps = store => {
    const { welcome } = store;
    return {
        data: welcome ? welcome.data : [],
    };
};

export default connect(mapStateToProps)(withStyles(styles)(Welcome));