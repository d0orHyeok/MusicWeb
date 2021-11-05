import React from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Header.module.css';

const cx = classNames.bind(styles);

function Header() {
    const homeUrl = 'http://localhost:3000';

    return (
        <header className={cx('header')}>
            <h1 className={cx('logo')}>
                <Link to={homeUrl}>Furi</Link>
            </h1>
            <nav>
                <ul className={cx('nav')}>
                    <li>
                        <Link to="/playlists">Playlists</Link>
                    </li>
                    <li>
                        <Link to="/register">Sing Up</Link>
                    </li>
                    <li>
                        <Link to="/login">Sing In</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
