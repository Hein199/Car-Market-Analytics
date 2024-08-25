import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ padding: '15px 10px' }}>
            <div className="container-fluid">
                <Link to="/Car-Market-Analytics/" className="navbar-brand" style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src='https://www.taladrod.com/w40/img/logo.svg'
                        alt='Car Market Logo'
                        style={{ width: '120px', height: 'auto' }}
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link
                                to="/Car-Market-Analytics/"
                                className="nav-link text-white fs-5"
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/Car-Market-Analytics/highlighted"
                                className="nav-link text-white fs-5"
                            >
                                Highlights
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
