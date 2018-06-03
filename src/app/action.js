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

export const login = () => ({
    type: LOG_IN,
    username: 'khoapham'
});

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


export const showNotification = (txt) => ({
    type: SHOW_NOTIFICATION,
    txt: txt
});

export const hideNotification = () => ({
    type: HIDE_NOTIFICATION
});

function getData() {
    return {
        type: FETCHING_DATA
    }
}

function getDataSuccess(data) {
    return {
        type: FETCHING_DATA_SUCCESS,
        data,
    }
}

function getDataFailure() {
    return {
        type: FETCHING_DATA_FAILURE
    }
}

export function fetchData() {
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
}