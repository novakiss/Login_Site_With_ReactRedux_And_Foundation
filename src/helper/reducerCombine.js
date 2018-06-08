import {combineReducers} from 'redux';

import username from '../app/signIn/reducers/usernameReducer';
import notification from '../app/notification/reducers/notificationReducer';
import getDataReducer from '../app/showRegistered/reducers/getDataReducer';
import registerUser from '../app/register/reducers/registerUserReducer';

const reducer= combineReducers({registerUser,username,notification,data:getDataReducer});

export default reducer;