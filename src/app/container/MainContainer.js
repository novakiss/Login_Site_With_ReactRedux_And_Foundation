import {connect} from 'react-redux';

import Main from "../components/Main";

const mapStateToProps=state=>{
    return {notification:state.notification}
};


export default connect(mapStateToProps)(Main)