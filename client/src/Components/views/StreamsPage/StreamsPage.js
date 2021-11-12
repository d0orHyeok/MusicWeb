import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMusics, deleteMusic } from '../../../_actions/music_action';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './StreamsPage.module.css';
import EditMusicPage from './Sections/EditMusicPage';

const cx = classNames.bind(styles);

function PlaylistsPage() {
    const dispatch = useDispatch();

    const user = useSelector(state => state.user.userData);
    const musics = useSelector(state => state.music.musics);

    const [MusicIndex, setMusicIndex] = useState(-1);
    const [IsEdit, setIsEdit] = useState(false);

    useEffect(() => {
        if (user.isAuth) {
            dispatch(getMusics({ writer: user._id })).then(res => {
                if (!res.payload.success) {
                    alert('Failed to get Musics');
                }
            });
        }
    }, [user]);

    const deleteCard = e => {
        const musicindex = e.target.getAttribute('musicindex');

        if (window.confirm('Want to delete this music?')) {
            let body = {
                writer: user._id,
                _id: musics[musicindex]._id,
            };

            dispatch(deleteMusic(body)).then(res => {
                if (!res.payload.success) {
                    alert('Failed to delete music!');
                }
            });
        }
    };

    const onClickEdit = e => {
        const musicindex = e.target.getAttribute('musicindex');
        setMusicIndex(musicindex);
        setIsEdit(true);
    };

    const musicCards = musics.map((music, index) => {
        if (music.writer === user._id) {
            console.log(music.writer, user._id);
        }

        return (
            <div className={cx('music')} key={index}>
                <img
                    className={cx('image')}
                    src="https://www.doc.gold.ac.uk/creativeprojects/wp-content/uploads/2016/10/unnamed.jpg"
                    alt="music"
                />
                <div className={cx('info')}>
                    <h2>
                        {music.author} - {music.title}
                    </h2>
                    <div className={cx('btn-wrapper')}>
                        <a className={cx('btn')} href={music.url} target="_blank" rel="noreferrer">
                            Link
                        </a>
                        <button className={cx('btn')} musicindex={index} onClick={onClickEdit}>
                            Edit
                        </button>
                        <button className={cx('btn')} musicindex={index} onClick={deleteCard}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <React.Fragment>
            {user.isAuth && musics && (
                <section className={cx('wrapper')}>
                    {musics.length > 0 ? (
                        <div className={cx('container')}>
                            <h1 className={cx('title')}>Musics</h1>
                            <div className={cx('musics')}>{musicCards}</div>
                            {IsEdit && <EditMusicPage music={musics[MusicIndex]} setIsEdit={setIsEdit} />}
                        </div>
                    ) : (
                        <Link className={cx('addMusic')} to="/add">
                            Add Music
                        </Link>
                    )}
                </section>
            )}
        </React.Fragment>
    );
}

export default PlaylistsPage;
