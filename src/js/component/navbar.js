// Navbar.js

import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <Link to="/">
                <span className="navbar-brand mb-0 h1">Contact List Home</span>
            </Link>
            <div className="ml-auto">
                <Link to="/add-contact">
                    <button className="btn btn-success">Add new contact</button>
                </Link>
            </div>
        </nav>
    );
};
