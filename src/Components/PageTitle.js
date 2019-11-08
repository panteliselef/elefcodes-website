import React from "react";



const PageTitle = ({text,coloredText}) => {
  return (
    <div className="title">
      {text[0]} <span className="blue-box">{coloredText}</span> {text[1]}
    </div>
  );
}

export default PageTitle;