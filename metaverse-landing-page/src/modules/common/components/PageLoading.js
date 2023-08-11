import React from "react";
import CircleLoading from "./CircleLoading";
import "../assets/css/pageLoading.scss";

const PageLoading = () => {
  return (
    <div className="page-loading">
      <div className="page-loading-backdrop"></div>
      <CircleLoading />
    </div>
  );
};

export default PageLoading;
