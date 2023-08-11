import React from "react";
import { useState } from "react";
import { useRef } from "react";

const ShopItemAdd = () => {
  const imageRef = useRef();
  const fileRef = useRef();

  const [unit, setUnit] = useState("VND");

  const handleClick = () => {};

  return (
    <div>
      <div className="flex flex-col items-start justify-center">
        <h1 className="text-white text-2xl font-bold">New Item</h1>
        <div className="w-3/4">
          <div className="flex items-start justify-between">
            <div className="flex-3">
              <div className="flex items-center">
                <p className="w-36 text-base text-white font-bold mb-0">
                  Image
                </p>
                <div className="w-full flex items-center justify-between">
                  <input type="file" name="image" hidden ref={imageRef} />
                  <div
                    onClick={() => imageRef.current.click()}
                    className="cursor-pointer auth-input w-56 mr-2 mb-0 py-4 relative"
                  >
                    <div
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 rounded-lg text-white px-2"
                      style={{ background: "#9B9E9F" }}
                    >
                      Choose file
                    </div>
                  </div>
                  <button
                    onClick={handleClick}
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    type="submit"
                    className="flex items-center justify-center whitespace-nowrap disabled:opacity-70 cursor-pointer disabled:cursor-not-allowed mx-2 text-white text-md px-4 py-1.5 rounded-lg bg-purple"
                  >
                    Upload
                  </button>
                </div>
              </div>
              <div className="flex items-center mt-3">
                <p className="w-36 text-base text-white font-bold mb-0">File</p>
                <div className="w-full flex items-center justify-between">
                  <input
                    type="file"
                    accept="image/*"
                    name="file"
                    hidden
                    ref={fileRef}
                  />
                  <div
                    onClick={() => fileRef.current.click()}
                    className="cursor-pointer auth-input w-56 mr-2 mb-0 py-4 relative"
                  >
                    <div
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 rounded-lg text-white px-2"
                      style={{ background: "#9B9E9F" }}
                    >
                      Choose file
                    </div>
                  </div>
                  <button
                    onClick={handleClick}
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    type="submit"
                    className="flex items-center justify-center whitespace-nowrap disabled:opacity-70 cursor-pointer disabled:cursor-not-allowed mx-2 text-white text-md px-4 py-1.5 rounded-lg bg-purple"
                  >
                    Upload
                  </button>
                </div>
              </div>
              <div className="flex items-center mt-3">
                <p className="w-36 text-base text-white font-bold mb-0">
                  Number
                </p>
                <div className="w-full flex items-center">
                  <input
                    type="text"
                    name="number"
                    className="w-28 auth-input mr-2 mb-0 py-1"
                  />
                </div>
              </div>
              <div className="flex items-center mt-3">
                <p className="w-36 text-base text-white font-bold mb-0">
                  Price
                </p>
                <div className="w-full flex items-center">
                  <input
                    type="text"
                    name="price"
                    className="w-28 auth-input mr-2 mb-0 py-1"
                  />
                  <select
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    name="unit"
                    className="outline-none flex items-center justify-center whitespace-nowrap disabled:opacity-70 cursor-pointer disabled:cursor-not-allowed mx-2 text-white text-md px-4 py-1.5 rounded-lg bg-purple"
                  >
                    <option value="vnd">VND</option>
                    <option value="usd">USD</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center mt-3">
                <p className="w-36 text-base text-white font-bold mb-0">
                  Description
                </p>
                <div className="w-full flex items-center">
                  <textarea
                    type="text"
                    name="description"
                    rows={6}
                    className="w-full auth-input mr-2 mb-0 py-1"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 self-start">
              <button
                onClick={handleClick}
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                type="submit"
                className="flex items-center justify-center whitespace-nowrap disabled:opacity-70 cursor-pointer disabled:cursor-not-allowed mx-2 text-white text-md px-4 py-1.5 rounded-lg bg-secondary"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopItemAdd;
