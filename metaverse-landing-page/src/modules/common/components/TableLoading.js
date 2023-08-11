import React from "react";
import CircleLoading from "./CircleLoading";
import "../assets/css/tableLoading.scss";

const TableLoading = () => {
  return (
    <div className="table-loading">
      <div className="table-loading-backdrop"></div>
      <CircleLoading />
    </div>
  );
};

export default TableLoading;
