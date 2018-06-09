import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import axios from "axios/index";

export default class Register extends Component {
    state = {
        username: '',
        password: '',
        submitted: false,
        id:null
    };

    componentWillMount(){
        axios.get('/registered')
            .then(res => {res.data.allId? this.setState({id:res.data.allId.slice(-1)[0]}):this.setState({id:-1})});
    };

    handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        this.setState({[name]: value});
    };

    handleRegister = (e) => {
        e.preventDefault();
        this.setState({submitted: true});
        const {register} = this.props;
        const{id}=this.state;
        const {username, password} = this.state;
        if (username.trim() !== '' && password.trim() !== '') {
            register(id+1, username, password);
        }
    };

    render() {
        const {username, password, submitted} = this.state;
        return (
            <div className="grid-container">
                <form onSubmit={this.handleRegister}>
                    <h1 className="text-center page-title">Register</h1>
                    Username: <input type="text" placeholder="Enter your username here" onChange={this.handleChange}
                                     name="username" value={username}/>
                    {submitted && !username.trim() && <div className="help-text">Username is required</div>}
                    Password: <input type="password" name="password" onChange={this.handleChange} value={password}/>
                    {submitted && !password.trim() && <div className="help-text">Password is required</div>}
                    <button type="submit" className="button">Register</button>
                    <Link to="/account">Cancel</Link>
                </form>
            </div>

        )
    }
}