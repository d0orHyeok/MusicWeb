import { ADD_MUSIC, UPDATE_MUSIC, GET_MUSICS_MUSIC, DELETE_MUSIC } from '../_actions/types';

const user_reducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_MUSIC:
            return { ...state, success: action.payload };
        case UPDATE_MUSIC:
            return { ...state, success: action.payload };
        case DELETE_MUSIC:
            return { ...state, success: action.payload };
        case GET_MUSICS_MUSIC:
            return { ...state, musics: action.payload };
        default:
            return state;
    }
};

export default user_reducer;
