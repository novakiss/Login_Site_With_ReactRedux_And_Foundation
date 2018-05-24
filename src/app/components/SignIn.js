import React, {Component} from 'react';
import axios from 'axios';

export default class SignIn extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const {login, showNotification} = this.props;
        const {username, password} = this.refs;
        axios.post('/signIn', {username: username.value, password: password.value})
            .then(res => {
                if (res.data === 'DANG_NHAP_THANH_CONG') {
                    login();
                } else {
                    showNotification('Dang nhap khong thanh cong');
                }
            })
            .catch(err => console.log(err))
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