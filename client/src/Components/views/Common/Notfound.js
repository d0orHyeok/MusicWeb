import React from 'react';

function Notfound() {
    return (
        <div
            style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
        >
            <h2 style={{ fontSize: '5rem', fontWeight: 'bold' }}>404</h2>
            <p style={{ fontSize: '2rem' }}>Page not found</p>
        </div>
    );
}

export default Notfound;
