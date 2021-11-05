import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './views/Header/Header';
import LandingPage from './views/LangdingPage/LandingPage';
import LoginPage from './views/LoginPage/LoginPage';
import RegisterPage from './views/RegisterPage/RegisterPage';
import PlaylistsPage from './views/PlaylistsPage/PlaylistsPage';

import './reset.css';

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Router>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="login" element={<LoginPage />} />
                        <Route path="register" element={<RegisterPage />} />
                        <Route path="playlists" element={<PlaylistsPage />} />
                    </Routes>
                </main>
            </Router>
        </Suspense>
    );
}

export default App;
