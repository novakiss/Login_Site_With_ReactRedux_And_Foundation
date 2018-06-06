import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class SignIn extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const {login} = this.props;
        const {username, password} = this.refs;
        login(username.value,password.value);
    };

    render() {
        return (<form>
            <h1 className="text-center page-title">Sign In</h1>
            <input type="text" placeholder="Username" ref="username"/>
            <input type="password" placeholder="Password" ref="password"/>
            <button className="button expanded" onClick={this.handleSubmit}>Login</button>
            <Link to="account/register">Register</Link>
        </form>)

    }
}