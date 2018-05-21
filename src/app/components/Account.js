import React,{Component} from 'react';
import SignInContainer from "../container/SignInContainer";
import AccountInfoContainer from "../container/AccountInfoContainer";

export default class Account extends Component{
    render(){
        const {username}=this.props;
        if (username===null){
            return <SignInContainer/>}else{return <AccountInfoContainer/>}

    }
}