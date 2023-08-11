import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HomeCategories from "../../home/components/HomeCategories";
import { metaActions } from "../redux/actions";
import MetaItem from "./MetaItem";
import { Pagination } from "antd";

const MetaList = () => {
  const dispatch = useDispatch();
  const { metaList } = useSelector((state) => state.meta);
  const { metaSearch } = useSelector((state) => state.meta);
  const { metaCategory } = useSelector((state) => state.meta);
  const { user } = useSelector((state) => state.auth);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (metaSearch.keyword) {
      dispatch(
        metaActions.searchMeta({
          page,
          name: metaSearch.keyword,
          category: metaCategory.category,
        })
      );
    } else {
      dispatch(
        metaActions.getMetaList({ page, category: metaCategory.category })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, dispatch, page, metaSearch.keyword, metaCategory.category]);

  const handlePageChange = (page) => {
    setPage(page);
    document
      .querySelector("#meta-list-flag")
      .scrollIntoView({ block: "start" });
  };

  const renderMetaList = () => {
    if (metaSearch.keyword) {
      if (metaSearch?.dataSearch?.results?.length > 0) {
        return metaSearch?.dataSearch?.results?.map((item) => (
          <Link to={`/metaverse/${item.id}`} key={item.id}>
            <MetaItem meta={item} />
          </Link>
        ));
      } else return <p className="text-white mb-0">Not found!</p>;
    } else {
      return metaList?.data?.results?.map((item) => (
        <Link to={`/metaverse/${item.id}`} key={item.id}>
          <MetaItem meta={item} />
        </Link>
      ));
    }
  };

  return (
    <div className="bg-primary">
      <div className="container">
        <HomeCategories />
        <div style={{ position: "relative" }}>
          <div
            id="meta-list-flag"
            style={{ position: "absolute", top: "-180px", left: 0 }}
          ></div>
        </div>
        <div className="meta-list mx-auto grid pb-7 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {renderMetaList()}
        </div>
        <Pagination
          defaultCurrent={1}
          total={metaList?.data?.count}
          pageSize={12}
          onChange={handlePageChange}
        />
        ;
      </div>
    </div>
  );
};

export default MetaList;
