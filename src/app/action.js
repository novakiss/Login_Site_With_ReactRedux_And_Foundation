import axios from 'axios';

import {
    HIDE_NOTIFICATION,
    LOG_IN,
    LOG_OUT,
    SHOW_NOTIFICATION,
    FETCHING_DATA,
    FETCHING_DATA_FAILURE,
    FETCHING_DATA_SUCCESS,
    REGISTER
} from './constant';

import {history} from "./helper/history";

export const login = (username, password) => {
    return (dispatch) => {
        getRegistered().then(res => {
            if (res !== null) {
                res.allId.forEach((e) => {
                    if(username === res.user[e].username && password === res.user[e].password) {
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

export const hideNotification = () => ({type: HIDE_NOTIFICATION});

export const fetchData = () => {
    return (dispatch) => {
        dispatch(getData());
        axios.get('/registered')
            .then((res) => {
                setTimeout(() => {
                    dispatch(getDataSuccess(res.data))
                }, 3000)
            })
            .catch((err) => {
                dispatch(getDataFailure());
                console.log('err:', err)
            })

    }
};

export const register = (id, username, password) => {
    return (dispatch) => {

        axios.post('/register', {id, username, password})
            .then((res) => {
                if (res.data !== 'RESGISTER_FAILED') {
                    dispatch({
                        type: REGISTER,
                        payload: {
                            id, username, password
                        }
                    });
                    history.push('/account');
                }
            })
            .catch((e) => console.log(e))
    }
};

export const getRegistered = () => {
    return axios.get('/registered')
        .then(res => {
            if (res.data) {
                return res.data;
            }
            return null;
        });
};

export const showNotification = (txt) => ({
    type: SHOW_NOTIFICATION,
    txt: txt
});

const getData = () => ({type: FETCHING_DATA});

const getDataSuccess = (data) => ({
    type: FETCHING_DATA_SUCCESS,
    data,
});

const getDataFailure = () => ({type: FETCHING_DATA_FAILURE});