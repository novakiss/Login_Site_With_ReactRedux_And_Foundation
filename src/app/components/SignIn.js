import React, {Component} from 'react';
import axios from 'axios';

export default class SignIn extends Component {
    handleSubmit(e) {
        e.preventDefault();
        const {login,showNotification} = this.props;
        const {username, password} = this.refs;
        axios.post('/signIn',{username: username.value,password:password.value})
            .then(res=>{
                if(res.data==='DANG_NHAP_THANH_CONG'){
                    login();
                }else{
                    showNotification('Dang nhap khong thanh cong');
                }
            })
            .catch(err=>console.log(err))
    };

    render() {
        return (<form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" placeholder="Username" ref="username"/>
            <br/>
            <input type="password" placeholder="Password" ref="password"/>
            <br/>
            <button>Login</button>
        </form>)

    }
}