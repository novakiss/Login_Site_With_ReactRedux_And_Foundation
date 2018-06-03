import axios from 'axios';

import {
    HIDE_NOTIFICATION,
    LOG_IN,
    LOG_OUT,
    SHOW_NOTIFICATION,
    FETCHING_DATA,
    FETCHING_DATA_FAILURE,
    FETCHING_DATA_SUCCESS
} from './constant';

import getPeople from '../api'

export const login = (username, password) => {
    return (dispatch) => {
        axios.post('/signIn', {username: username, password: password})
            .then(res => {
                if (res.data === 'DANG_NHAP_THANH_CONG') {
                    dispatch({
                        type: LOG_IN,
                        username: 'khoapham'
                    })
                } else {
                    dispatch(showNotification('Dang nhap khong thanh cong'));
                }
            })
            .catch(err => console.log(err))
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

const showNotification = (txt) => ({
    type: SHOW_NOTIFICATION,
    txt: txt
});

export const hideNotification = () => ({type: HIDE_NOTIFICATION});

const getData = () => ({type: FETCHING_DATA});

const getDataSuccess = (data) => ({
        type: FETCHING_DATA_SUCCESS,
        data,
    }
);

const getDataFailure = () => ({type: FETCHING_DATA_FAILURE});

export const fetchData=()=> {
    return (dispatch) => {
        dispatch(getData());
        getPeople()
            .then((data) => {
                dispatch(getDataSuccess(data))
            })
            .catch((err) => {
                dispatch(getDataFailure());
                console.log('err:', err)
            })
    }
};