import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMusics, deleteMusic } from '../../../_actions/music_action';

import classNames from 'classnames/bind';
import styles from './StreamsPage.module.css';

const cx = classNames.bind(styles);

function PlaylistsPage() {
    const dispatch = useDispatch();

    const user = useSelector(state => state.user.userData);

    const [Musics, setMusics] = useState([]);

    useEffect(() => {
        dispatch(getMusics()).then(res => {
            if (res.payload.success) {
                setMusics([...res.payload.musics]);
            } else {
                alert('Failed to get Musics');
            }
        });
    }, []);

    const deleteCard = e => {
        const musicIndex = e.target.getAttribute('musicIndex');

        let body = {
            writer: user._id,
            _id: Musics[musicIndex]._id,
        };

        dispatch(deleteMusic(body)).then(res => {
            if (res.payload.success) {
                setMusics(Musics.splice(musicIndex, 1));
                window.location.replace('/streams');
            } else {
                alert('Failed to delete music!');
            }
        });
    };

    const musicCards = Musics.map((music, index) => {
        return (
            <div key={index}>
                <div>
                    <h2>{music.title}</h2>
                    <span>{music.author}</span>
                    <div>
                        <a href={music.url} target="_blank" rel="noreferrer">
                            Link
                        </a>
                        <button>Edit</button>
                        <button musicIndex={index} onClick={deleteCard}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <section>
            <h1>Musics</h1>
            <div>{musicCards}</div>
        </section>
    );
}

export default PlaylistsPage;
