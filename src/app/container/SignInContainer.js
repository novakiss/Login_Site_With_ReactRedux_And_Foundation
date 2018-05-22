import {connect} from 'react-redux';

import {login,showNotification} from '../action';

import SignIn from '../components/SignIn';

const mapDispatchToProps= {
     login,showNotification
};

export default connect(null,mapDispatchToProps)(SignIn)