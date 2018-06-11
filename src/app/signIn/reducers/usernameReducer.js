import {LOG_IN,LOG_OUT} from '../constants';

const initialState= {
  username:null,
  admin: false
};

const login = (state=initialState, action)=>{
    switch (action.type){
        case LOG_IN:
            return {...state,username:action.username,admin:action.admin};
        case LOG_OUT:
            return {...state,username:null,admin:false};
        default:
            return state;
    }
};

export default login;