import React from "react";
import { Link } from "react-router-dom";

import HeaderMenuItem from "../header-menu-item/header-menu-item.component";

import { ReactComponent as Logo } from "../../assets/shared/logo.svg";

import "./header.styles.scss";
import { useState } from "react";

const Header = () => {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => {
    setHidden(!hidden);
  };
  return (
    <div className="header">
      <Link className="header__logo-container" to="/">
        <Logo className="header__logo" />
      </Link>
      <div className="header__line"></div>
      <div className="overlay"></div>
      <div className="navigation__button" onClick={toggleHidden}>
        <span
          className={`navigation__icon ${hidden ? "" : "navigation__icon--1"}`}
        ></span>
        <span
          className={`navigation__icon ${hidden ? "" : "navigation__icon--2"}`}
        ></span>
        <span
          className={`navigation__icon ${hidden ? "" : "navigation__icon--3"}`}
        ></span>
      </div>
      <ul className="header__menu-container">
        <HeaderMenuItem num={"00"} name={"Home"} link={"/"} />
        <HeaderMenuItem
          num={"01"}
          name={"destination"}
          link={"/destination/Moon"}
        />
        <HeaderMenuItem num={"02"} name={"Crews"} link={"/crew"} />
        <HeaderMenuItem num={"03"} name={"technology"} link={"/technology/0"} />
      </ul>
    </div>
  );
};

export default Header;
