import React from "react";
import { NavLink } from 'react-router-dom';
import PageTitle from "./PageTitle";
import insta from '../images/instagram.png'

const Menu  = React.forwardRef(({visible,doOnClick},ref) => {
  // className={visible?"menu-container":"menu-container disabled"}
  return (
    <div ref={ref} className="menu-container disabled">
      <div className="container">

        <PageTitle text={['Menu']}/>

        <ul>
          <li className="title" onClick={doOnClick} ><NavLink to='/' >Home</NavLink></li>
          <li className="title" onClick={doOnClick}><NavLink to='/instagram' >Instagram</NavLink></li>
          <li className="title" onClick={doOnClick}><NavLink to='/projects' >Projects</NavLink></li>
        </ul>
      </div>
      <div className="object">
          <div>Scan this nametag on Instagram to <span> follow</span> me</div>
          <img src={insta} alt=""/>
        </div>

    </div>
  );
})

export default Menu ;