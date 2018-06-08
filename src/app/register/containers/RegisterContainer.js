import {connect} from 'react-redux';

import {register} from '../actions'

import Register from '../components/Register';

const mapStateToProps= state=>{
    const {registerUser}= state;
    return {registerUser};
};

const mapDispatchToProps ={
    register
};

export default connect(mapStateToProps,mapDispatchToProps)(Register)