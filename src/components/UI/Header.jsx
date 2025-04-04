import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export const Header = () => {
    const [show, setShow] = useState(false);

    const handleButtonToggle = () => {
        setShow(!show);
    };

    return (
        <header>
            <div className="container">
                <div className="grid navbar-grid">
                    <div className="Logo">
                        <NavLink to="/">
                            <h1>WorldAtlas</h1>
                        </NavLink>
                    </div>
                    <nav className={show ? "menu-mobile" : "menu-web"}>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/country">Country</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <button className="ham-menu" onClick={handleButtonToggle} aria-label="Toggle navigation menu">
                        <GiHamburgerMenu />
                    </button>
                </div>
            </div>
        </header>
    );
};