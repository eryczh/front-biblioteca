import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export default function Header() {
    return (
        <header className="header-container">
            <Link to="/" className="header-link">
                <h1 className="header-title">Biblioteca Online</h1>
            </Link>
            <Link to="/login" className="login-button">Login</Link>
        </header>
    );
};
