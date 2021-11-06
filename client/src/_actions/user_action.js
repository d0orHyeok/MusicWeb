import Axios from 'axios';
import { USER_SERVER } from '../Config';
import { LOGIN_USER, REGISTER_USER, LOGOUT_USER, AUTH_USER } from './types';

export function registerUser(data) {
    const req = Axios.post(`${USER_SERVER}/register`, data).then(res => (res = res.data));

    return {
        type: REGISTER_USER,
        payload: req,
    };
}

export function loginUser(data) {
    const req = Axios.post(`${USER_SERVER}/login`, data).then(res => (res = res.data));

    return {
        type: LOGIN_USER,
        payload: req,
    };
}

export function logoutUser(data) {
    const req = Axios.get(`${USER_SERVER}/logout`, data).then(res => (res = res.data));

    return {
        type: LOGOUT_USER,
        payload: req,
    };
}

export function auth(data) {
    const req = Axios.get(`${USER_SERVER}/auth`, data).then(res => (res = res.data));

    return {
        type: AUTH_USER,
        payload: req,
    };
}
