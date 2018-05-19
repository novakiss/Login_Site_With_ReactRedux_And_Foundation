import {connect} from 'react-redux';

import {logout} from '../action';

import AccountInfo from '../components/AccountInfo';

const mapStateToProps= state =>{
    return {username:state.username}
};
const mapDispatchToProps= {
    logout
};

export default connect(mapStateToProps,mapDispatchToProps)(AccountInfo)