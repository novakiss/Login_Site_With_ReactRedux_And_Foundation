import axios from "axios/index";
import {LOG_IN} from "../signIn/constants";

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