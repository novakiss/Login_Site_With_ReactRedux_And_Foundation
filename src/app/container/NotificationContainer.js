import {connect} from 'react-redux';

import {hideNotification} from '../action';

import Notification from '../components/Notification';

const mapDispatchToProps= {
    hideNotification
};

export default connect(null,mapDispatchToProps)(Notification)