import React from "react";
import scss from "./Header.module.scss";

import estateIcon from "../../../assets/estate.svg";
import userIcon from "../../../assets/user.svg";
import appIcon from "../../../assets/appIcon.svg";


const Header = () => {
  return (
    <>
      <header className={scss.header}>
        <nav className={`${scss.nav} ${scss.container}`}>
          <a href="/" className={scss.nav__logo}>
            Janetta
          </a>

          <div className={scss.nav__menu}>
            <ul className={`${scss.nav__list}${scss.grid}`}>
              <li className={scss.nav__item}>
                <a href="#home" className={scss.nav__link}>
                  <img className={`${scss.uil} ${scss.nav__icon}`} src={estateIcon}></img>Home
                </a>
              </li>
              <li className={scss.nav__item}>
                <a href="#about" className={scss.nav__link}>
                  <img className={`${scss.uil} ${scss.nav__icon}`} src={userIcon}></img>About
                </a>
              </li>
              <li className={scss.nav__item}>
                <a href="#skills" className={scss.nav__link}>
                  <img className={`${scss.uil} ${scss.nav__icon}`}></img>Skills
                </a>
              </li>
              <li className={scss.nav__item}>
                <a href="#services" className={scss.nav__link}>
                  <img className={`${scss.uil} ${scss.nav__icon}`}></img>
                  Services
                </a>
              </li>
              <li className={scss.nav__item}>
                <a href="#portfolio" className={scss.nav__link}>
                  <img className={`${scss.uil} ${scss.nav__icon}`}></img>
                  Portfolio
                </a>
              </li>
              <li className={scss.nav__item}>
                <a href="#contact" className={scss.nav__link}>
                  <img className={`${scss.uil} ${scss.nav__icon}`}></img>Contact
                </a>
              </li>
            </ul>
            <span className={`${scss.uil} ${scss.nav__close}`} >x</span>
          </div>
          <div className="nav-toggle">
            <img src={appIcon} alt="app" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
