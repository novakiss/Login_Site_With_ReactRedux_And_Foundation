import axios from 'axios';
import {LOG_IN, LOG_OUT} from "./constants";

export const login = (username, password) => {
    return (dispatch) => {
        getAllRegistered().then(res => {
            if (res !== null) {
                res.allId.forEach((e) => {
                    if ((username === res.user[e].username && password === res.user[e].password) || (username === 'admin' && password === '123')) {
                        axios.post('/signIn', {username: username, password: password})
                            .then(res => {
                                if (res.data === 'DANG_NHAP_THANH_CONG') {
                                    dispatch({
                                        type: LOG_IN,
                                        username: username
                                    })
                                }
                            })
                            .catch(err => console.log(err))
                    }
                });
            }
        }).catch((e) => console.log(e));

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

export const checkLogin = () => {
    return (dispatch) =>
        axios.get('/getInfo')
            .then(res => {
                if (res.data !== 'CHUA_DANG_NHAP') {
                    dispatch({type: LOG_IN, username: res.data});
                }

            })
            .catch(err => console.log(err));
};