import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="nav">
            <ul className="nav--items">
                <li>
                    <Link className="nav--item" to="/">Home</Link>
                </li>
                <li>
                    <Link className="nav--item" to="/profile">Profile</Link>
                </li>
            </ul>
        </nav>
    )
}
