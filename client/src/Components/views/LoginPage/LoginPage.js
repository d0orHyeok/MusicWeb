import React from 'react';

import styles from './LoginPage.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function LoginPage() {
    return (
        <div>
            <form>
                <div className={cx('form-input')}>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" />
                </div>
                <div className={cx('form-input')}>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" />
                </div>
            </form>
        </div>
    );
}

export default LoginPage;
