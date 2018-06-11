import {connect} from 'react-redux';

import Account from '../components/Account';

const mapStateToProps= state =>{
    const {username,admin}= state.login;
    return {username,admin}
};


export default connect(mapStateToProps)(Account)