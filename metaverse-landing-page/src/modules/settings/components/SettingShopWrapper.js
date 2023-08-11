import React, { useState } from "react";
import ShopItem from "./ShopItem";
import ShopItemAdd from "./ShopItemAdd";

const SettingShopWrapper = () => {
  const [isAdd, setIsAdd] = useState(false);

  const handleClick = () => {
    setIsAdd(true);
  };

  if (isAdd) return <ShopItemAdd />;

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-white text-2xl font-bold">My Item</h1>
        <button
          onClick={handleClick}
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          type="submit"
          className="flex items-center justify-center whitespace-nowrap disabled:opacity-70 cursor-pointer disabled:cursor-not-allowed mx-2 text-white font-bold text-md px-4 py-2 rounded-lg bg-secondary"
        >
          Add item
        </button>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {new Array(10).fill(0).map((item, index) => (
          <ShopItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SettingShopWrapper;
