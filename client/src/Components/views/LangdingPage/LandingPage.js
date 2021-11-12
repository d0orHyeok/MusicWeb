import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function LandingPage() {
    const user = useSelector(state => state.user.userData);
    useEffect(() => {}, [useSelector]);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: '1.5rem',
                fontWeight: 'bold',
            }}
        >
            <div style={{ margin: '2rem 0' }}>Add your favorite music!</div>
            {user.isAuth && (
                <div>
                    Check your musics in <Link to="/streams">Streams</Link>
                </div>
            )}
            {!user.isAuth && (
                <div>
                    Don't have an Account? <Link to="/register">Join us!</Link>
                </div>
            )}
        </div>
    );
}

export default LandingPage;
