import React from "react";
import coinImg from "modules/base/assets/images/coin.png";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ShopItem = () => {
  const [showAction, setShowAction] = useState(false);

  return (
    <div className="w-40 mb-5 flex flex-col items-center justify-center">
      <div className="w-full rounded-lg border-2 border-secondary cursor-pointer shine relative">
        <div className="select-none flex flex-col items-center justify-center py-4 px-2">
          <img src={coinImg} alt="" />
          <div className="text-white text-lg mt-3">O1</div>
        </div>
        <div
          onClick={() => setShowAction(!showAction)}
          className="select-none absolute text-white top-1 right-2 cursor-pointer w-6 h-5"
        >
          <FontAwesomeIcon className="absolute right-0" icon={faEllipsisV} />
        </div>
        {showAction && (
          <div className="select-none text-white text-center absolute flex flex-col items-center justify-center right-6 text-xs top-0 shadow-2xl">
            <div className="hover:opacity-80 bg-secondary w-full px-2 py-1">
              Edit
            </div>
            <div className="hover:opacity-80 bg-purple w-full px-2 py-1">
              Delete
            </div>
          </div>
        )}
      </div>
      <div className="text-white flex items-center justify-center mt-3 w-full">
        <div className="mr-2">100</div>
        <div className="bg-purple px-2 rounded">VND</div>
      </div>
    </div>
  );
};

export default ShopItem;
