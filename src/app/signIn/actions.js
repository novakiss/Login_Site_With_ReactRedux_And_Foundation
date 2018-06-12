import axios from 'axios';
import {LOG_IN, LOG_OUT} from "./constants";
import {showNotification} from "../notification/actions";

export const login = (username, password) => {
    return (dispatch) => {
        if (username === 'admin' && password === '123') {
            axios.post('/signIn', {username: username, password: password})
                .then(res => {
                    if (res.data === 'DANG_NHAP_THANH_CONG') {
                        dispatch({
                            type: LOG_IN,
                            username: username,
                        })
                    }
                })
                .catch(err => console.log(err))
        } else {
            getAllRegistered().then(res => {
                if (res.allId ){
                    let success= false;
                    res.allId.forEach((e) => {
                        if ((username === res.user[e].username && password === res.user[e].password)) {
                            success= true;
                            axios.post('/signIn', {username: username, password: password})
                                .then(res => {
                                    if (res.data === 'DANG_NHAP_THANH_CONG') {
                                        dispatch({
                                            type: LOG_IN,
                                            username: username,
                                        })
                                    }
                                })
                                .catch(err => console.log(err))
                        }
                    });
                    if(!success){
                        dispatch(showNotification('failed Login'));
                    }
                }
            }).catch((e) => console.log(e));
        }
    }
};

export const logout = () => {
    return (dispatch) => {
        axios.get('/logout')
            .then(() =>
                dispatch({
                    type: LOG_OUT
                })
            )
            .catch(err => console.log(err))
        ;
    }
};

export const getAllRegistered = () => {
    return axios.get('/registered')
        .then(res => {
            if (res.data) {
                return res.data;
            }
            return null;
        });
};