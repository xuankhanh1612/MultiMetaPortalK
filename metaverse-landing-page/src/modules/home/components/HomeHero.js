import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { metaActions } from "../../meta/redux/actions";

const HomeHero = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleSearchMeta = (e) => {
    e.preventDefault();
    dispatch(metaActions.searchKeyword(value));
  };

  return (
    <div className="home-hero bg-hero h-560 flex flex-col items-center justify-center">
      <h1 className="home-hero__heading text-white text-base sm:text-2xl md:text-3xl lg:text-5xl font-bold">
        Create Your Metaverse, Your Own
      </h1>
      <div className="home-hero__search w-3/4 sm:w-2/3 xl:w-1/3 mt-3 sm:mt-5 md:mt-8 lg:mt-10">
        <form onSubmit={handleSearchMeta}>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="search the metaverse"
            className="h-11 md:h-16 py-4 px-6 focus:outline-none w-full text-white placeholder:text-base placeholder:lg:text-xl bg-primary-light rounded-lg block"
          />
          <div
            onClick={handleSearchMeta}
            className="cursor-pointer search-icon absolute right-4 top-1/2 transform -translate-y-1/2 text-base md:text-3xl text-white"
          >
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomeHero;
