import {REGISTER} from '../constant'

const initialState = {
    user: {},
    allUserId: [],
};

const registerUser = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER:
            const {username, password, id} = action.payload;
            return {
                ...state,
                user: {...state.user, [id]: {username: username, password: password}},
                allUserId: [...state.allUserId, id]
            };
        default:
            return state;
    }
};

export default registerUser;