import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';

import styles from './LoginPage.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const emailOnChangeHandler = e => {
        setEmail(e.currentTarget.value);
    };

    const passwordOnChangeHandler = e => {
        setPassword(e.currentTarget.value);
    };

    const onSubmit = e => {
        e.preventDefault();

        let body = {
            email: Email,
            password: Password,
        };

        dispatch(loginUser(body)).then(res => {
            if (res.payload.loginSuccess) {
                navigate('/');
            } else {
                alert('Failed to login');
            }
        });
    };

    return (
        <section className={cx('login-page')}>
            <div className={cx('container')}>
                <form onSubmit={onSubmit}>
                    <div className={cx('title')}>Login</div>
                    <div className={cx('input-box', 'underline')}>
                        <input onChange={emailOnChangeHandler} type="email" placeholder="Enter Your Email" required />
                        <div className={cx('underline')}></div>
                    </div>
                    <div className={cx('input-box')}>
                        <input
                            onChange={passwordOnChangeHandler}
                            type="password"
                            placeholder="Enter Your Password"
                            required
                        />
                        <div className={cx('underline')}></div>
                    </div>
                    <div className={cx('input-box', 'button')}>
                        <input type="submit" name="" value="Continue" />
                    </div>
                </form>
                <div className={cx('option')}>
                    New to Furi?{' '}
                    <Link to="/register" className={cx('register')}>
                        Join Now!
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default LoginPage;
