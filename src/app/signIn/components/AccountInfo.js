import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class AccountInfo extends Component{
    logout=()=>{
        const{logout}= this.props;
        logout();
    };

    render(){
        return(<div>
            <h1>This is a Account</h1>
            Username: {this.props.username}
            <br/>
            <Link exact="true" to="/account" onClick={this.logout}>Log out</Link>
            </div>)

    }
}