import React, {Component} from 'react';

export default class Register extends Component {
    handleRegister = (e) => {
        e.preventDefault();
        const {register,showNotification}= this.props;
        const {username,password}= this.refs;
        const {registerUser}= this.props;
        const id= registerUser.allUserId.length? registerUser.allUserId.slice(-1)[0]+1:0;
        if(username.value!=='' && password.value!==''){
            register(id,username.value,password.value);
        }else {
            showNotification('Sie müssen andere');
        }

    };

    render() {
        return (
            <div className="grid-container">
                <form>
                    <h1 className="text-center page-title">Register</h1>
                    Username: <input type="text" placeholder="Enter your username here" ref="username"/>
                    Password: <input type="password" ref="password"/>
                    <button className="button expanded" onClick={this.handleRegister}>Register</button>
                </form>
            </div>

        )
    }
}