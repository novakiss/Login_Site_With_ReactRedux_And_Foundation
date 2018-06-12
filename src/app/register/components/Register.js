import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import axios from "axios/index";

export default class Register extends Component {
    state = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        submitted: false,
        passwordConfirm:'',
        id: null
    };

    componentWillMount() {
        axios.get('/registered')
            .then(res => {
                res.data.allId ? this.setState({id: res.data.allId.slice(-1)[0] + 1}) : this.setState({id: 0})
            });
    };

    handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        this.setState({[name]: value});
    };

    handleRegister = (e) => {
        e.preventDefault();
        this.setState({submitted: true});
        const {register,showNotification} = this.props;
        const {id} = this.state;
        const {username, password, firstName, lastName,passwordConfirm} = this.state;
        if (username.trim() !== '' && password.trim() !== '' && firstName.trim() !== '' && lastName.trim() !== '') {
            if(password===passwordConfirm){
                register(id, username, password,firstName,lastName);
            }else {
                showNotification('Die beiden Passwort müssen gleich sein')
            }

        }
    };

    render() {
        const {username, password, firstName, lastName, submitted,passwordConfirm} = this.state;
        return (
            <div className="grid-container">
                <form onSubmit={this.handleRegister}>
                    <h1 className="text-center page-title">Register</h1>
                    Vorname: <input type="text" placeholder="Enter your firstName here" onChange={this.handleChange}
                                    name="firstName" value={firstName}/>
                    {submitted && !firstName.trim() && <div className="help-text">Firstname is required</div>}
                    NachName: <input type="text" placeholder="Enter your lastName here" onChange={this.handleChange}
                                     name="lastName" value={lastName}/>
                    {submitted && !lastName.trim() && <div className="help-text">Firstname is required</div>}
                    Username: <input type="text" placeholder="Enter your lastName here" onChange={this.handleChange}
                                     name="username" value={username}/>
                    {submitted && !username.trim() && <div className="help-text">Username is required</div>}
                    Password: <input type="password" name="password" onChange={this.handleChange} value={password}/>
                    {submitted && !password.trim() && <div className="help-text">Password is required</div>}
                    Confirm Password: <input type="password" name="passwordConfirm" onChange={this.handleChange} value={passwordConfirm}/>
                    <button type="submit" className="button">Register</button>
                    <Link to="/account">Cancel</Link>
                </form>
            </div>

        )
    }
}