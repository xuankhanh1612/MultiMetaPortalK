import React from "react";
import { Rate } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faUser, faHeart } from "@fortawesome/free-solid-svg-icons";
import defaultMetaImg from "../assets/images/placeholder-image.png";

const MetaItem = ({ meta }) => {
  return (
    <div className="mx-auto meta-item border-2 rounded-2xl border-secondary text-secondary cursor-pointer text-center h-full">
      <img
        src={meta?.images_link?.length ? meta?.images_link[0] : defaultMetaImg}
        alt="anh meta"
        className="meta-cover hover:opacity-80 rounded-t-2xl"
      />
      <div className="meta-info pb-3 px-4">
        <div className="meta-title text-xs sm:text-base md:text-xl mt-1 md:mt-4 text-secondary">
          {meta?.name || "No title"}
        </div>
        <Rate className="meta-rating" disabled defaultValue={4} allowHalf />
        <div className="meta-subtitle mx-auto mb-1 mt-1">
          {meta.description}
        </div>
        <div className="meta-stats mt-2.5 flex items-center justify-between">
          <div>
            <FontAwesomeIcon icon={faEye} /> 11.024
          </div>
          <div>
            <FontAwesomeIcon icon={faUser} /> 1.089
          </div>
          <div>
            <FontAwesomeIcon icon={faHeart} /> 5.008
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaItem;
