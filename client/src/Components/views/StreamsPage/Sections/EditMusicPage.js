import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateMusic } from '../../../../_actions/music_action';

import classNames from 'classnames/bind';
import styles from './EditMusicPage.module.css';

const cx = classNames.bind(styles);

function EditMusicPage(props) {
    const dispatch = useDispatch();

    const user = useSelector(state => state.user.userData);

    const [Title, setTitle] = useState('');
    const [URL, setURL] = useState('');
    const [Musican, setMusican] = useState('');
    const [Music, setMusic] = useState({});

    useEffect(() => {
        setMusic(props.music);
        setTitle(Music.title);
        setURL(Music.url);
        setMusican(Music.author);
    }, [Music]);

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

        if (
            (props.music.title !== Title || props.music.author !== Musican || props.music.url !== URL) &&
            window.confirm(`Want to edit music?`)
        ) {
            const body = {
                filter: {
                    writer: user._id,
                    _id: Music._id,
                },
                update: {
                    title: Title,
                    author: Musican,
                    url: URL,
                },
            };

            dispatch(updateMusic(body)).then(res => {
                if (res.payload.success) {
                    props.setIsChange(true);
                } else {
                    alert('Failed to update music!!');
                }
            });
        }

        props.setIsEdit(false);
    };

    return (
        <section className={cx('wrapper')}>
            <div className={cx('container')}>
                <form onSubmit={onSubmit}>
                    <div className={cx('title')}>Edit Music</div>
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
                            placeholder="Enter Musician"
                            required
                        />
                        <div className={cx('underline')}></div>
                    </div>
                    <div className={cx('input-box', 'button')}>
                        <input type="submit" name="" value="Edit Music" />
                    </div>
                </form>
            </div>
        </section>
    );
}

export default EditMusicPage;
