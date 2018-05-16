import React, {Component} from 'react';
import {connect} from 'react-redux';
import {login} from '../action';

class SignIn extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const {dispatch} = this.props;
        const {username, password} = this.refs;
        if (username.value === 'khoapham' && password.value === '123') {
            dispatch(login());
        }
    };

    render() {
        return (<form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Username" ref="username"/>
            <br/>
            <input type="password" placeholder="Password" ref="password"/>
            <br/>
            <button>Login</button>
        </form>)

    }
}

export default connect()(SignIn)