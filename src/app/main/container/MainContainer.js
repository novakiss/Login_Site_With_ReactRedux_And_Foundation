import {connect} from 'react-redux';

import Main from "../components/Main";

import {checkLogin} from '../actions'

const mapStateToProps=state=>{
    return {notification:state.notification}
};

const mapDispatchToProps ={
    checkLogin
};

export default connect(mapStateToProps,mapDispatchToProps)(Main)