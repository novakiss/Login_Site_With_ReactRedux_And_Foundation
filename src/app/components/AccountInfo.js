import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class AccountInfo extends Component{
    logout=()=>{
        const{logout}= this.props;
        axios.get('/logout')
            .then(()=>{
                logout();
            })
            .catch(err=>console.log(err))
    };

    render(){
        return(<div>
            <h1>This is a Account</h1>
            Username: {this.props.username}
            <br/>
            <Link exact to="/account" onClick={this.logout}>Log out</Link>
            </div>)

    }
}