import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../../../_actions/user_action';

import classNames from 'classnames/bind';
import styles from '../Header.module.css';

const cx = classNames.bind(styles);

function ChangingNav() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(state => state.user);

    const logoutHandler = () => {
        dispatch(logoutUser()).then(res => {
            console.log(res.payload.success);
            if (res.payload.success) {
                navigate('/login');
            } else {
                alert('Failed to logout');
            }
        });
    };

    if (user.userData && !user.userData.isAuth) {
        return (
            <React.Fragment>
                <li>
                    <Link to="/register" className={cx('nav-link')}>
                        Sing Up
                    </Link>
                </li>
                <li>
                    <Link to="/login" className={cx('nav-link')}>
                        Sing In
                    </Link>
                </li>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <li>
                    <Link to="/add" className={cx('nav-link')}>
                        Add Music
                    </Link>
                </li>
                <li>
                    <a onClick={logoutHandler} href="/" className={cx('nav-link')}>
                        Logout
                    </a>
                </li>
            </React.Fragment>
        );
    }
}

export default ChangingNav;
