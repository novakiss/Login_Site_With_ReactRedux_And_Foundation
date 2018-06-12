import axios from 'axios';
import {REGISTER} from "./constants";
import {history} from "../../helper/history";
import {showNotification} from "../notification/actions";

export const register = (id, username, password,firstName,lastName) => {
    return (dispatch) => {
        checkUserAlreadyRegister(username).then(res => {
            if (res) {
                dispatch(showNotification('User already registered!'))
            } else {
                axios.post('/register', {id, username, password,firstName,lastName})
                    .then((res) => {
                        if (res.data !== 'RESGISTER_FAILED') {
                            dispatch({
                                type: REGISTER,
                                payload: {
                                    id, username, password ,firstName,lastName
                                }
                            });
                            history.push('/account');
                        }
                    })
                    .catch((e) => console.log(e))
            }
        })
    }

};

const checkUserAlreadyRegister = (username) => {
    return axios.get('/registered').then(res => {
        const {data} = res;
        let a = false;
        if (data.allId) {
            data.allId.forEach((e) => {
                if (data.user[e].username.trim() === username.trim()) {
                    a = true;
                }
            })
        }
        return a

    }).catch(e => console.log(e))
};