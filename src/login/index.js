import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';

import Alert from 'components/dialog'

import * as actions from './redux/actions';
import Auth from 'support/Auth';

import styles from './styles';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            auth: null
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        this.setState({
            auth: Auth.isAuthenticated()
        });

    }

    onSubmit(e) {
        e.preventDefault();
        console.log('Submit: ', e.target.value);
        const { username, password } = this.state;
        if (username === 'admin' && password === 'admin') {
            this.props.dispatch(actions.attempt(true));
        } else {
            const title = 'Error!'
            const message = 'Credentials Incorrect'
            this.refs.alert.handleClickOpen(title, message)
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const { classes } = this.props;
        const { auth } = this.state;
        console.log('auth login: ', auth);
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        if (Auth.isAuthenticated()) {
            return <Redirect to={from} />;
        }

        return (
            <div
                className={classes.container}
            >
                <Paper className={classes.root} elevation={1}>
                    Login
          <form onSubmit={this.onSubmit} className={classes.box_login}>
                        <FormControl className={classes.margin_form}>
                            <InputLabel htmlFor='input-with-icon-adornment'>
                                Username
              </InputLabel>
                            <Input
                                required
                                name='username'
                                onChange={this.handleChange}
                                startAdornment={
                                    <InputAdornment position='start'>
                                        <AccountCircle />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl className={classes.margin_form}>
                            <InputLabel htmlFor='input-with-icon-adornment'>
                                Password
              </InputLabel>
                            <Input
                                type='password'
                                required
                                name='password'
                                onChange={this.handleChange}
                                startAdornment={
                                    <InputAdornment position='start'>
                                        <LockIcon />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <Button
                            variant='contained'
                            type='submit'
                            color='primary'
                            className={classes.margin_form_btn}
                        >
                            Login
            </Button>
                    </form>
                    <Alert ref='alert' />
                </Paper>
            </div>
        );

    }
}

const component = withStyles(styles)(Login);

export default connect(store => {
    const { login } = store;

    return {
        requesting: login.requesting,
        error: login.error,
        response: login.response,
        token: login.token
    };
})(component);

// export default withStyles(styles, { withTheme: true })(Login);
