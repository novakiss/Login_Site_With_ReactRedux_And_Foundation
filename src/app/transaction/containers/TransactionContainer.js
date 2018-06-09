import {connect} from 'react-redux';

import Transactions from '../components/Transactions';

const mapStateToProps= state =>{
    return {username:state.username}
};


export default connect(mapStateToProps)(Transactions)