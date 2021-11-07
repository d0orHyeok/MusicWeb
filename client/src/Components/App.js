import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from '../hoc/auth';

import Header from './views/Header/Header';
import LandingPage from './views/LangdingPage/LandingPage';
import LoginPage from './views/LoginPage/LoginPage';
import RegisterPage from './views/RegisterPage/RegisterPage';
import StreamsPage from './views/StreamsPage/StreamsPage';
import Notfound from './views/Common/Notfound';
import AddMusicPage from './views/AddMusicPage.js/AddMusicPage';

import './reset.css';
import './App.css';

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Router>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={React.createElement(Auth(LandingPage, null))} />
                        <Route path="login" element={React.createElement(Auth(LoginPage, false))} />
                        <Route path="register" element={React.createElement(Auth(RegisterPage, false))} />
                        <Route path="streams" element={React.createElement(Auth(StreamsPage, true))} />
                        <Route path="add" element={React.createElement(Auth(AddMusicPage, true))} />
                        <Route path="*" element={<Notfound />} />
                    </Routes>
                </main>
            </Router>
        </Suspense>
    );
}

export default App;
