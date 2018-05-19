import React, {Component} from 'react';


export default class SignIn extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const {login} = this.props;
        const {username, password} = this.refs;
        if (username.value === 'khoapham' && password.value === '123') {
            login();
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