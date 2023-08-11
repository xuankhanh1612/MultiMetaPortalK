import React from "react";
import "../assets/css/circleLoading.scss";

const CircleLoading = ({ color = "#4338CA", size = 30, className }) => {
  return (
    <div className={`circle-loading ${className ? className : ''}`}>
      <div
        className="loading"
        style={{
          borderRightColor: color,
          borderLeftColor: color,
          height: size,
          width: size,
        }}
      >
        {" "}
      </div>
    </div>
  );
};

export default CircleLoading;
