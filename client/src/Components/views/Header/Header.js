import React from 'react';
import { Link } from 'react-router-dom';
import ChangingNav from './Sections/ChangingNav';

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
                        <Link to="/streams" className={cx('nav-link')}>
                            Streams
                        </Link>
                    </li>
                    <ChangingNav />
                </ul>
            </nav>
        </header>
    );
}

export default Header;
