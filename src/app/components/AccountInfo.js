import React,{Component} from 'react';

export default class AccountInfo extends Component{
    render(){
        return(<div>
            <h1>This is a Account</h1>
            Username: {this.props.username}
            <br/>
            <a href="/#" onClick={this.props.logout}>Log out</a>
            </div>)

    }
}