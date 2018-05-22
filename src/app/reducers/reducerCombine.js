import {combineReducers} from 'redux';

import username from './usernameReducer';
import notification from './notificationReducer';

const reducer= combineReducers({username,notification});

export default reducer;