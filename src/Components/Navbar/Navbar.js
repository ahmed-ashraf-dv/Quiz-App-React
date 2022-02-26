import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetLevel } from "../../Store";
import style from "./Navbar.module.css";
import Container from "../Container/Container";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  // Redux Data
  const {
    lang: { getTRNS },
  } = useSelector((data) => data);

  const Dispatch = useDispatch();

  const resetLevelHandelar = () => Dispatch(resetLevel());

  // Check And Add Acctive Class
  const acctiveClass = ({ isActive }) =>
    isActive ? `${style.acctive} acctive` : "";

  return (
    <nav>
      <Container className={style.container + " navContainer"}>
        <div className={style.logo}>
          <Link to="/">Friend Quiz</Link>
        </div>
        <div className={style.uls + " uls"}>
          <ul>
            <li>
              <NavLink
                onClick={resetLevelHandelar}
                className={acctiveClass}
                to="/"
              >
                {getTRNS.navUl[0]}
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={resetLevelHandelar}
                className={acctiveClass}
                to="/result"
              >
                {getTRNS.navUl[1]}
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
