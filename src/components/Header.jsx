import React from "react";
import css from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={css.Header}>
      <h1>
        Marvel <span>Fight Club</span>
      </h1>
      <nav>
        <NavLink to="/" exact={true} activeClassName={css.LinkActive}>
          Characters
        </NavLink>
        <NavLink to="/battle" activeClassName={css.LinkActive}>
          Battle
        </NavLink>
        <NavLink to="/battlelog" activeClassName={css.LinkActive}>
          Battle log
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
