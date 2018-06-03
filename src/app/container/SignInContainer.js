import {connect} from 'react-redux';

import {login} from '../action';

import SignIn from '../components/SignIn';

const mapDispatchToProps= {
     login
};

export default connect(null,mapDispatchToProps)(SignIn)