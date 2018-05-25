import {HIDE_NOTIFICATION,LOG_IN,LOG_OUT,SHOW_NOTIFICATION} from './constant';

export const login= ()=>({
  type:LOG_IN,
  username: 'khoapham'
});

export const logout = ()=>({
    type: LOG_OUT
});

export const showNotification =(txt)=>({
    type: SHOW_NOTIFICATION,
    txt:txt
});

export const hideNotification =()=>({
    type: HIDE_NOTIFICATION
});