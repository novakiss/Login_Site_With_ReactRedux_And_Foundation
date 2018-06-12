import {REGISTER} from '../constants'

const initialState = {
    user: {},
    allUserId: [],
};

const registerUser = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER:
            const {username, password, id,firstName,lastName} = action.payload;
            return {
                ...state,
                user: {...state.user, [id]: {username, password,firstName,lastName}},
                allUserId: [...state.allUserId, id]
            };
        default:
            return state;
    }
};

export default registerUser;