import {LOG_IN,LOG_OUT} from '../constants';

const initialState= {
  username:null,
};

const login = (state=initialState, action)=>{
    switch (action.type){
        case LOG_IN:
            return {...state,username:action.username};
        case LOG_OUT:
            return {...state,username:null};
        default:
            return state;
    }
};

export default login;