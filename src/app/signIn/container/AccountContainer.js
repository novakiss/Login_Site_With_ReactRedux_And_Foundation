import {connect} from 'react-redux';

import Account from '../components/Account';

const mapStateToProps= state =>{
    return {username:state.username}
};


export default connect(mapStateToProps)(Account)