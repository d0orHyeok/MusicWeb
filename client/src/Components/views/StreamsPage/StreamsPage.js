import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMusics, deleteMusic } from '../../../_actions/music_action';

import classNames from 'classnames/bind';
import styles from './StreamsPage.module.css';
import EditMusicPage from './Sections/EditMusicPage';

const cx = classNames.bind(styles);

function PlaylistsPage() {
    const dispatch = useDispatch();

    const user = useSelector(state => state.user.userData);

    const [Musics, setMusics] = useState([]);
    const [Delete, setDelete] = useState(false);
    const [Edit, setEdit] = useState(false);

    useEffect(() => {
        dispatch(getMusics()).then(res => {
            if (res.payload.success) {
                setMusics([...res.payload.musics]);
            } else {
                alert('Failed to get Musics');
            }
        });
    }, [Delete]);

    const deleteCard = e => {
        const musicindex = e.target.getAttribute('musicindex');

        let body = {
            writer: user._id,
            _id: Musics[musicindex]._id,
        };

        dispatch(deleteMusic(body)).then(res => {
            if (res.payload.success) {
                // redux store의 state도 같이 변경시키자
                setDelete(true);
                // setMusics(Musics.splice(musicindex, 1));
                // window.location.replace('/streams');
            } else {
                alert('Failed to delete music!');
            }
        });
    };

    const onClickEdit = () => {
        setEdit(true);
    };

    const musicCards = Musics.map((music, index) => {
        return (
            <Link to="/streams" className={cx('music')} key={index}>
                <img
                    className={cx('image')}
                    src="https://image.shutterstock.com/image-illustration/music-themed-thumbnail-260nw-1125825584.jpg"
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
                        <button className={cx('btn')} onClick={onClickEdit}>
                            Edit
                        </button>
                        <button className={cx('btn')} musicindex={index} onClick={deleteCard}>
                            Delete
                        </button>
                    </div>
                </div>
            </Link>
        );
    });

    return (
        <section className={Edit ? cx('wrapper', 'edit') : cx('wrapper')}>
            <div className={cx('container')}>
                <h1 className={cx('title')}>Musics</h1>
                <div className={cx('musics')}>{musicCards}</div>
            </div>
            {Edit && <EditMusicPage setEdit={setEdit} />}
        </section>
    );
}

export default PlaylistsPage;
