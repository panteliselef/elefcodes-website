import React from "react";
import { NavLink } from 'react-router-dom';
import PageTitle from "./PageTitle";
import insta from '../images/instagram.png'
const Menu  = ({visible}) => {

  return (
    <div className={visible?"menu-container":"menu-container disabled"}>
      <div className="container">

        <PageTitle text={['Menu']}/>

        <ul>
          <li className="title"><NavLink to='/' >Home</NavLink></li>
          <li className="title"><NavLink to='/instagram' >Instagram</NavLink></li>
          <li className="title"><NavLink to='/projects' >Projects</NavLink></li>
        </ul>
      </div>
      <div className="object">
          <div>Scan this nametag on Instagram to <span> follow</span> me</div>
          <img src={insta} alt=""/>
        </div>

    </div>
  );
}

export default Menu ;