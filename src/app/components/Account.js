import React,{Component} from 'react';
import {connect} from 'react-redux';
import SignIn from "./SignIn";
import AccountInfo from "./AccountInfo";

 class Account extends Component{
    render(){
        const {username}=this.props;
        if (username===null){
            return <SignIn/>}else{return <AccountInfo/>}

    }
}

const mapStateToProps=(state)=>({username:state.username});

export default connect(mapStateToProps)(Account)