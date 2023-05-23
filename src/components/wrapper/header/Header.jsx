import React from "react";
import   "./Header.scss";

import estateIcon from "../../../assets/estate.svg";
import userIcon from "../../../assets/user.svg";
import appIcon from "../../../assets/appIcon.svg";


const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a href="/" className="nav__logo">
            Janetta
          </a>

          <div className="nav__menu">
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
                  <img className="uil nav__icon}"></img>Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="#services" className="nav__link">
                  <img className="uil nav__icon"></img>
                  Services
                </a>
              </li>
              <li className="nav__item">
                <a href="#portfolio" className="nav__link">
                  <img className="uil nav__icon"></img>
                  Portfolio
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <img className="uil nav__icon}"></img>Contact
                </a>
              </li>
            </ul>
            <span className="uil nav__close" >x</span>
          </div>
          <div className="nav__toggle">
            <img src={appIcon} alt="app" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
