import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function EditMusicPage(props) {
    const dispatch = useDispatch();

    const setEdit = () => {
        props.setEdit(false);
    };

    return (
        <div>
            EditPage
            <button onClick={setEdit}>Save</button>
        </div>
    );
}

export default EditMusicPage;
