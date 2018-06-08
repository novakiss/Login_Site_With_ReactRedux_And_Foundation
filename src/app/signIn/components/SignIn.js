import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class SignIn extends Component {
    state = {
        username: '',
        password: '',
        submitted: false
    };

    handleChange = (e) => {
        e.preventDefault();
        const {value, name} = e.target;
        this.setState({[name]: value})
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({submitted: true});
        const {login} = this.props;
        const {username, password} = this.state;
        login(username, password);
    };

    render() {
        const {username, password, submitted} = this.state;
        return (<form>
            <h1 className="text-center page-title">Sign In</h1>
            <input type="text" placeholder="Username" onChange={this.handleChange} name="username"
                   value={this.state.username}/>
            {submitted && !username && <div className="help-text">Username is required</div>}
            <input type="password" placeholder="Password" onChange={this.handleChange} name="password"
                   value={this.state.password}/>
            {submitted && !password && <div className="help-text">Password is required</div>}
            <button className="button expanded" onClick={this.handleSubmit}>Login</button>
            <Link to="account/register">Register</Link>
        </form>)

    }
}