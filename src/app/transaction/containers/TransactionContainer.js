import {connect} from 'react-redux';

import Transactions from '../components/Transactions';

const mapStateToProps= state =>{
    const {username}=state.login;
    return {username}
};


export default connect(mapStateToProps)(Transactions)