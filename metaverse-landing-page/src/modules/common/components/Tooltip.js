import React from "react";
import "../assets/css/tooltip.scss";

const Tooltip = ({ content, children, isOneRow = false }) => {
  return content ? (
    <div className="tooltip">
      {children}
      <span className={`tooltiptext ${isOneRow ? "whitespace-nowrap" : ""}`}>{content}</span>
    </div>
  ) : children;
};

export default Tooltip;
