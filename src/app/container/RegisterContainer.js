import {connect} from 'react-redux';

import {register,showNotification} from '../action'

import Register from '../components/Register';

const mapStateToProps= state=>{
    const {registerUser}= state;
    return {registerUser};
};

const mapDispatchToProps ={
    register,showNotification
};

export default connect(mapStateToProps,mapDispatchToProps)(Register)