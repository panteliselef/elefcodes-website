import React from "react";
import { NavLink } from 'react-router-dom';

import '../App.css';
const BurgerMenuButton  = ({toggleBurger,opened}) => {

  return (
    <div className="burger" onClick={toggleBurger}>
      <div id="bar1" className={opened ? "change line" :"line"}></div>
      <div id="bar2" className={opened ? "change line" :"line"}></div>
      <div id="bar3" className={opened ? "change line" :"line"}></div>
    </div>
  );
}

export default BurgerMenuButton ;