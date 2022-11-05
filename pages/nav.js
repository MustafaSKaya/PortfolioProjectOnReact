import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from "react";
import "bootstrap/js/src/collapse.js";

export default function navigation() {

    const [navBar, setNavBar] = useState(false);

    const changeNavBar = () => {
        if (window.scrollY >= 100) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    };

    window.addEventListener('scroll', changeNavBar);

    return (
        <nav className={navBar ? `navbar navbar-expand-lg sticky fixed-top styles-nav stickyadd` : `navbar navbar-expand-lg sticky fixed-top styles-nav`}>
            <div className="container">
                <a href="#" className="navbar-brand">MyPortfolioProject</a> 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarId">
                    <span><FontAwesomeIcon className="hamburger" icon={faBars} /></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarId">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href="" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">Services</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">Recommendations</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}