import { ADD_MUSIC, UPDATE_MUSIC, GET_MUSICS_MUSIC, DELETE_MUSIC } from '../_actions/types';

const user_reducer = (state = { musics: [] }, action) => {
    switch (action.type) {
        case ADD_MUSIC:
            return { ...state, addSuccess: action.payload.success };
        case UPDATE_MUSIC:
            if (action.payload.success) {
                const newMusics = state.musics.map(music => {
                    if (music._id === action.payload.music._id) {
                        music = action.payload.music;
                    }
                    return music;
                });
                return {
                    ...state,
                    musics: newMusics,
                    updateSuccess: action.payload.success,
                };
            }
            return { ...state, updateSuccess: action.payload.success };
        case DELETE_MUSIC:
            if (action.payload.success) {
                return {
                    ...state,
                    musics: state.musics.filter(music => music._id !== action.payload.music._id),
                    deleteSuccess: action.payload.success,
                };
            }
            return { ...state, deleteSuccess: action.payload.success };
        case GET_MUSICS_MUSIC:
            return { ...state, musics: action.payload.musics };
        default:
            return state;
    }
};

export default user_reducer;
