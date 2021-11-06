import React from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './RegisterPage.module.css';

const cx = classNames.bind(styles);

function RegisterPage() {
    return (
        <section className={cx('register-page')}>
            <div className={cx('wrapper')}>
                <h2>Registration</h2>
                <form>
                    <div className={cx('input-box')}>
                        <input type="text" placeholder="Enter your name" required />
                    </div>
                    <div className={cx('input-box')}>
                        <input type="email" placeholder="Enter your email" required />
                    </div>
                    <div className={cx('input-box')}>
                        <input type="password" placeholder="Create password" required />
                    </div>
                    <div className={cx('input-box')}>
                        <input type="password" placeholder="Confirm password" required />
                    </div>
                    <div className={cx('policy')}>
                        <input type="checkbox" />
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
