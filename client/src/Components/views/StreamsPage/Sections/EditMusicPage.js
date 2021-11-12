import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateMusic } from '../../../../_actions/music_action';

import classNames from 'classnames/bind';
import styles from './EditMusicPage.module.css';

const cx = classNames.bind(styles);

function EditMusicPage(props) {
    const dispatch = useDispatch();

    const user = useSelector(state => state.user.userData);

    const [Music, setMusic] = useState({});

    const { title, url, author } = Music;

    useEffect(() => {
        setMusic(props.music);
    }, []);

    const onChangeHandler = e => {
        const { name, value } = e.target;
        setMusic({
            ...Music,
            [name]: value,
        });
    };

    const onSubmit = e => {
        e.preventDefault();

        if (
            (props.music.title !== title || props.music.author !== author || props.music.url !== url) &&
            window.confirm(`Want to edit music?`)
        ) {
            const body = {
                filter: {
                    writer: user._id,
                    _id: Music._id,
                },
                update: {
                    title: title,
                    author: author,
                    url: url,
                },
            };

            dispatch(updateMusic(body)).then(res => {
                if (!res.payload.success) {
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
                            name="url"
                            onChange={onChangeHandler}
                            value={url}
                            type="url"
                            placeholder="Enter Music URL *"
                            required
                        />
                        <div className={cx('underline')}></div>
                    </div>
                    <div className={cx('input-box')}>
                        <input
                            name="title"
                            onChange={onChangeHandler}
                            value={title}
                            type="text"
                            placeholder="Enter Music Title *"
                            required
                        />
                        <div className={cx('underline')}></div>
                    </div>
                    <div className={cx('input-box')}>
                        <input
                            name="author"
                            onChange={onChangeHandler}
                            value={author}
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
