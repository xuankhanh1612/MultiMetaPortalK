import React, { useEffect, useState } from "react";
import { Table, COMPONENT_STATUS } from "../../common";
import { useSelector } from "react-redux";
import {
  settingMediaColumns,
  initParams,
  MEDIA_TYPES,
} from "../utils/settingMediaUtils";
import { Link, useParams } from "react-router-dom";
import { SettingService } from "../redux/services";

const SettingMediaListWrapper = () => {
  const { typeName } = useParams();
  const [params, setParams] = useState(initParams);
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const [currentMedia, setCurrentMedia] = useState(null);
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const mediaObject = MEDIA_TYPES.find(({ name }) => name === typeName);
    if (!mediaObject) return;
    setCurrentMedia(mediaObject);
    getData({
      type_id: mediaObject.type_id,
      metaverse_id: user?.meta_id,
    });
  }, [typeName]);

  const onChangePage = (page) => {
    params.page = page;
    getData(params);
  };

  const getData = (params) => {
    if (status !== COMPONENT_STATUS.LOADING) {
      setStatus(COMPONENT_STATUS.LOADING);
      setParams(params);
      SettingService.apiGetListMedia(params)
        .then((res) => {
          setData(res.results);
          setTotal(res.count);
          setStatus(COMPONENT_STATUS.SUCCESS);
        })
        .catch((error) => {
          setStatus(COMPONENT_STATUS.ERROR);
          console.log("error", error);
        });
    }
  };

  return currentMedia ? (
    <div className="setting-media-page">
      <div className="page-content">
        <div className="text-right">
          <Link
            className="btn-custom"
            to={`/setting/${currentMedia.name}/create`}
          >
            Add {currentMedia.name}
          </Link>
        </div>
        <div className="mt-4">
          <Table
            columns={settingMediaColumns()}
            dataSource={data}
            isFetching={status === COMPONENT_STATUS.LOADING}
            currentPage={params.page}
            total={total}
            limit={10}
            onChangePage={onChangePage}
          />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default SettingMediaListWrapper;
