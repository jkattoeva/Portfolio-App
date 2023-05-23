import React, { useState } from "react";
import "./Header.scss";

import estateIcon from "../../../assets/estate.svg";
import userIcon from "../../../assets/user.svg";
import appIcon from "../../../assets/appIcon.svg";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a href="/" className="nav__logo">
            Janetta
          </a>

          <div className={Toggle ? "nav__menu show__menu" : "nav__menu"}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                  <img className="uil nav__icon" src={estateIcon}></img>Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <img className="uil nav__icon" src={userIcon}></img>About
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <img className="uil nav__icon" src={userIcon} />
                  Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="#services" className="nav__link">
                  <img className="uil nav__icon" src={appIcon} />
                  Services
                </a>
              </li>
              <li className="nav__item">
                <a href="#portfolio" className="nav__link">
                  <img className="uil nav__icon" src={appIcon} />
                  Portfolio
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <img className="uil nav__icon" src={userIcon} />
                  Contact
                </a>
              </li>
            </ul>
            <span className="uil nav__close">x</span>
          </div>
          <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
            <img src={appIcon} alt="app" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
