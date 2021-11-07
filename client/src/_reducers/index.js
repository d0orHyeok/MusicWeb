import { combineReducers } from 'redux';
import user from './user_reducer';
import music from './music_reducer';

const rootReducer = combineReducers({
    user,
    music,
});

export default rootReducer;
