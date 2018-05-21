import React, {Component} from 'react';
import axios from 'axios';

export default class SignIn extends Component {
    handleSubmit(e) {
        e.preventDefault();
        const {login} = this.props;
        const {username, password} = this.refs;
        axios.post('http://localhost:3000/signIn',{username: username.value,password:password.value})
            .then(res=>{
                if(res.data==='DANG_NHAP_THANH_CONG'){
                    login();
                }else{
                    console.log(res.data);
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