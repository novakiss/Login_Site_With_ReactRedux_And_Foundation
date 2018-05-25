import {combineReducers} from 'redux';

import username from './usernameReducer';
import notification from './notificationReducer';
import getDataReducer from './getDataReducer';

const reducer= combineReducers({username,notification,data:getDataReducer});

export default reducer;