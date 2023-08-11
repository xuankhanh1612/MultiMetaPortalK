import React from "react";
import { Link } from "react-router-dom";
import { EyeIcon } from "@heroicons/react/outline";

const IconView = ({ to = "", isDisabled = false, className = "" }) => {
  return (
    <Link
      className={`wrap-icon-action ${
        isDisabled ? "disabled" : ""
      } ${className}`}
      to={to}
    >
      <EyeIcon className="w-4 h-4" />
    </Link>
  );
};

export default IconView;
