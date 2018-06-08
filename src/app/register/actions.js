import axios from 'axios';
import {REGISTER} from "./constants";
import {history} from "../../helper/history";

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