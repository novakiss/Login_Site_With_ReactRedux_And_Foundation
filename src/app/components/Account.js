import React,{Component} from 'react';
import {connect} from 'react-redux';
import SignInContainer from "../container/SignInContainer";
import AccountInfoContainer from "../container/AccountInfoContainer";

 class Account extends Component{
    render(){
        const {username}=this.props;
        if (username===null){
            return <SignInContainer/>}else{return <AccountInfoContainer/>}

    }
}

const mapStateToProps=(state)=>({username:state.username});

export default connect(mapStateToProps)(Account)