import {FETCHING_DATA, FETCHING_DATA_FAILURE, FETCHING_DATA_SUCCESS} from "./constants";
import axios from "axios/index";

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

const getData = () => ({type: FETCHING_DATA});

const getDataSuccess = (data) => ({
    type: FETCHING_DATA_SUCCESS,
    data,
});

const getDataFailure = () => ({type: FETCHING_DATA_FAILURE});