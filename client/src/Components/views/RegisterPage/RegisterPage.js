import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';

import classNames from 'classnames/bind';
import styles from './RegisterPage.module.css';

const cx = classNames.bind(styles);

function RegisterPage(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [UserName, setUserName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const [Agree, setAgree] = useState(false);

    const nameChangeHandler = e => {
        setUserName(e.currentTarget.value);
    };

    const emailChangeHandler = e => {
        setEmail(e.currentTarget.value);
    };

    const passwordChangeHandler = e => {
        setPassword(e.currentTarget.value);
    };

    const confirmPasswordChangeHandler = e => {
        setConfirmPassword(e.currentTarget.value);
    };

    const checkChangeHandler = e => {
        setAgree(e.target.checked);
    };

    const onSubmitHandler = e => {
        e.preventDefault();

        if (!Agree) {
            return alert('Please check terms & condition');
        }

        if (Password !== ConfirmPassword) {
            return alert('Please input same password ');
        }

        let body = {
            email: Email,
            name: UserName,
            password: Password,
        };

        dispatch(registerUser(body)).then(res => {
            if (res.payload.success) {
                alert('Successfuly Sign up!');
                navigate('/login');
            } else {
                alert('Opps..., Failed to sign up');
            }
        });
    };

    return (
        <section className={cx('register-page')}>
            <div className={cx('wrapper')}>
                <h2>Registration</h2>
                <form onSubmit={onSubmitHandler}>
                    <div className={cx('input-box')}>
                        <input type="text" onChange={nameChangeHandler} placeholder="Enter your name" required />
                    </div>
                    <div className={cx('input-box')}>
                        <input type="email" onChange={emailChangeHandler} placeholder="Enter your email" required />
                    </div>
                    <div className={cx('input-box')}>
                        <input
                            type="password"
                            onChange={passwordChangeHandler}
                            placeholder="Create password"
                            required
                        />
                    </div>
                    <div className={cx('input-box')}>
                        <input
                            type="password"
                            onChange={confirmPasswordChangeHandler}
                            placeholder="Confirm password"
                            required
                        />
                    </div>
                    <div className={cx('policy')}>
                        <input type="checkbox" onChange={checkChangeHandler} />
                        <h3>I accept all terms & condition</h3>
                    </div>
                    <div className={cx('input-box', 'button')}>
                        <input type="Submit" value="Register Now" />
                    </div>
                    <div className={cx('text')}>
                        <h3>
                            Already have an account? <Link to="/login">Login now</Link>
                        </h3>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default RegisterPage;
