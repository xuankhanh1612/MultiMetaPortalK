import React from "react";
import { Link } from "react-router-dom";
import { PencilAltIcon } from "@heroicons/react/outline";

const IconEdit = ({ to, isDisabled = false, className = "" }) => {
  return (
    <Link
      className={`wrap-icon-action ${
        isDisabled ? "disabled" : ""
      } ${className}`}
      to={to}
    >
      <PencilAltIcon className="w-4 h-4" />
    </Link>
  );
};

export default IconEdit;
