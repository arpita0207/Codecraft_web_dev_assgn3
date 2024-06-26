import React from "react";
import "./Image.css";

const Image = ({ url }) => {
  return (
    <div>
      <img src={url} alt="Character" />
    </div>
  );
};

export default Image;
