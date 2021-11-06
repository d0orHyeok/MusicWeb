import React from 'react';
import { Link } from 'react-router-dom';

import styles from './LoginPage.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function LoginPage() {
    return (
        <section className={cx('login-page')}>
            <div className={cx('container')}>
                <form>
                    <div className={cx('title')}>Login</div>
                    <div className={cx('input-box', 'underline')}>
                        <input type="email" placeholder="Enter Your Email" required />
                        <div className={cx('underline')}></div>
                    </div>
                    <div className={cx('input-box')}>
                        <input type="password" placeholder="Enter Your Password" required />
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
