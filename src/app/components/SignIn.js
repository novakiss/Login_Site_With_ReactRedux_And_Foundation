import React, {Component} from 'react';

export default class SignIn extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const {login} = this.props;
        const {username, password} = this.refs;
        login(username.value,password.value);
    };

    render() {
        return (<form onSubmit={this.handleSubmit}>
            <h1 className="text-center page-title">Sign In</h1>
            <input type="text" placeholder="Username" ref="username"/>
            <input type="password" placeholder="Password" ref="password"/>
            <button className="button expanded">Login</button>
        </form>)

    }
}