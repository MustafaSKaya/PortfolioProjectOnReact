import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from "react";

export default function Navigation({ brand }) {

    const [navBar, setNavBar] = useState(false);

    //console.log(brand);

    const changeNavBar = () => {
        if (window.scrollY >= 100) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    };

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
        window.addEventListener('scroll', changeNavBar);
    }, []);

    return (
        <nav className={navBar ? `navbar navbar-expand-lg sticky fixed-top styles-nav stickyadd` : `navbar navbar-expand-lg sticky fixed-top styles-nav`}>
            <div className="navContainer container">
                <a href="#" className="navbar-brand">{brand}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarId">
                    <span><FontAwesomeIcon className="hamburger" icon={faBars} /></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarId">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href="#about" onClick={() => document.getElementById("about").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})}  className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#skills" className="nav-link">Skills</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}