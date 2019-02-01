import React from "react";

import {NavLink} from 'react-router-dom';
const PageTitle = ({url}) => {
  return (
    <NavLink className="rounded-button" to={url}>
      Recent Posts
    </NavLink>
  );
}

export default PageTitle;