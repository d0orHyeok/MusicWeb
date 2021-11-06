import React from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Header.module.css';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('header')}>
            <h1>
                <Link to="/" className={cx('logo')}>
                    Furi
                </Link>
            </h1>
            <nav>
                <ul className={cx('nav')}>
                    <li>
                        <Link to="/playlists" className={cx('nav-link')}>
                            Playlists
                        </Link>
                    </li>
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
                </ul>
            </nav>
        </header>
    );
}

export default Header;
