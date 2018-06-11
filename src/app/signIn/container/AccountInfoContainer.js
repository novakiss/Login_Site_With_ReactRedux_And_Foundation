import {connect} from 'react-redux';

import {logout} from '../actions';

import AccountInfo from '../components/AccountInfo';

const mapStateToProps= state =>{
    const {username,admin}=state.login;
    return {username,admin}
};
const mapDispatchToProps= {
    logout
};

export default connect(mapStateToProps,mapDispatchToProps)(AccountInfo)