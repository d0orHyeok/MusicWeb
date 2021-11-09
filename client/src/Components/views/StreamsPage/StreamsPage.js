import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMusics, deleteMusic } from '../../../_actions/music_action';

import classNames from 'classnames/bind';
import styles from './StreamsPage.module.css';
import EditMusicPage from './Sections/EditMusicPage';

const cx = classNames.bind(styles);

function PlaylistsPage() {
    const dispatch = useDispatch();

    const user = useSelector(state => state.user.userData);

    const [Musics, setMusics] = useState([]);
    const [MusicIndex, setMusicIndex] = useState(-1);
    const [IsEdit, setIsEdit] = useState(false);
    const [IsChange, setIsChange] = useState(false);

    useEffect(() => {
        dispatch(getMusics()).then(res => {
            if (res.payload.success) {
                setMusics([...res.payload.musics]);
            } else {
                alert('Failed to get Musics');
            }
        });
        return setIsChange(false);
    }, [IsChange]);

    const deleteCard = e => {
        const musicindex = e.target.getAttribute('musicindex');

        if (window.confirm('Want to delete this music?')) {
            let body = {
                writer: user._id,
                _id: Musics[musicindex]._id,
            };

            dispatch(deleteMusic(body)).then(res => {
                if (res.payload.success) {
                    // redux store의 state도 같이 변경시키자
                    setIsChange(true);
                } else {
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

    const musicCards = Musics.map((music, index) => {
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
        <section className={cx('wrapper')}>
            <div className={cx('container')}>
                <h1 className={cx('title')}>Musics</h1>
                <div className={cx('musics')}>{musicCards}</div>
            </div>
            {IsEdit && <EditMusicPage music={Musics[MusicIndex]} setIsEdit={setIsEdit} setIsChange={setIsChange} />}
        </section>
    );
}

export default PlaylistsPage;
