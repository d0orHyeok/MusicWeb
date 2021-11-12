import Axios from 'axios';
import { MUSIC_SERVER } from '../Config';
import { ADD_MUSIC, UPDATE_MUSIC, GET_MUSICS_MUSIC, DELETE_MUSIC } from './types';

export function addMusic(data) {
    const req = Axios.post(`${MUSIC_SERVER}/add`, data).then(res => (res = res.data));

    return {
        type: ADD_MUSIC,
        payload: req,
    };
}

export function updateMusic(data) {
    const req = Axios.post(`${MUSIC_SERVER}/updateMusic`, data).then(res => res.data);

    return {
        type: UPDATE_MUSIC,
        payload: req,
    };
}

export function deleteMusic(data) {
    const req = Axios.post(`${MUSIC_SERVER}/deleteMusic`, data).then(res => res.data);

    return {
        type: DELETE_MUSIC,
        payload: req,
    };
}

export function getMusics(data) {
    const req = Axios.post(`${MUSIC_SERVER}/getMusics`, data).then(res => res.data);

    return {
        type: GET_MUSICS_MUSIC,
        payload: req,
    };
}
