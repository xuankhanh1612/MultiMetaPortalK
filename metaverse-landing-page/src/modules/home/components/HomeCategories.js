import { COMPONENT_STATUS } from "modules/common";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { metaActions } from "../../meta/redux/actions";
import { HomeActions } from "../redux/actions";

const HomeCategories = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(1);
  const { status, data } = useSelector((state) => state.home.categories);

  useEffect(() => {
    if (status !== COMPONENT_STATUS.LOADING && data.length === 0) {
      dispatch(HomeActions.getCategories({}));
    }
  }, []);

  const handleChange = (id) => {
    setActive(id);
    dispatch(metaActions.metaCategory(id));
  };

  return (
    <div className="home-categories py-7 flex items-center justify-start sm:justify-center">
      {data.map((item) => (
        <div
          key={item.id}
          onClick={() => handleChange(item.id)}
          className={`${
            item.id === active ? "bg-secondary text-primary" : "text-secondary"
          } hover:opacity-80 whitespace-nowrap border border-secondary text-xs md:text-base ml-2 py-1 px-3 text-primary w-max font-medium rounded-3xl cursor-pointer`}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default HomeCategories;
