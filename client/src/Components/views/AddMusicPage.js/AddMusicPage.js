import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMusic } from '../../../_actions/music_action';
import { useNavigate } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './AddMusicPage.module.css';

const cx = classNames.bind(styles);

function AddMusicPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(state => state.user.userData);

    const [Title, setTitle] = useState('');
    const [URL, setURL] = useState('');
    const [Musican, setMusican] = useState('');

    const titleChangeHandler = e => {
        setTitle(e.currentTarget.value);
    };

    const urlChangeHandler = e => {
        setURL(e.currentTarget.value);
    };

    const musicanChangeHandler = e => {
        setMusican(e.currentTarget.value);
    };

    const onSubmit = e => {
        e.preventDefault();

        const body = {
            writer: user._id,
            title: Title,
            author: Musican,
            url: URL,
        };

        dispatch(addMusic(body)).then(res => {
            if (res.payload.success) {
                const title = Title;
                setTitle('');
                setURL('');
                setMusican('');
                if (window.confirm(`Add Music: ${title}\n Do you want to see in Streams?`)) {
                    navigate('/streams');
                }
            } else {
                alert('Failed to add music!');
            }
        });
    };

    return (
        <section className={cx('wrapper')}>
            <div className={cx('container')}>
                <form onSubmit={onSubmit}>
                    <div className={cx('title')}>Add Music</div>
                    <div className={cx('input-box')}>
                        <input
                            onChange={urlChangeHandler}
                            value={URL}
                            type="url"
                            placeholder="Enter Music URL *"
                            required
                        />
                        <div className={cx('underline')}></div>
                    </div>
                    <div className={cx('input-box')}>
                        <input
                            onChange={titleChangeHandler}
                            value={Title}
                            type="text"
                            placeholder="Enter Music Title *"
                            required
                        />
                        <div className={cx('underline')}></div>
                    </div>
                    <div className={cx('input-box')}>
                        <input
                            onChange={musicanChangeHandler}
                            value={Musican}
                            type="text"
                            placeholder="Enter Musician *"
                            required
                        />
                        <div className={cx('underline')}></div>
                    </div>
                    <div className={cx('input-box', 'button')}>
                        <input type="submit" name="" value="Add Music" />
                    </div>
                </form>
            </div>
        </section>
    );
}

export default AddMusicPage;
