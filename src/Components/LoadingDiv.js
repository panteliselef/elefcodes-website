import React from "react";
import loadingIcon from '../images/progress-clock.svg'



const LoadingDiv = () => {
  return (
    <div className="loading-div shadow">
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',margin:'0.7em'}}>
        <div className="loading-div-text">Loading</div>
        <img alt="loading-icon" src={loadingIcon}></img>
      </div>
      <div className="animated-bar"></div>
    </div>
  );
}

export default LoadingDiv;