import React from "react";
import "./Nav.css";
import "bootstrap/dist/css/bootstrap.min.css";

const navPanel = () => {
    return (
        <nav className="header">
            <div className="flex">
                <h1 className="text-black">G</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>

    )
}

export default navPanel;