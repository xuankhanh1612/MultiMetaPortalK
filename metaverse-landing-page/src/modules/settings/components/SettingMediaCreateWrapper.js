import React, { useEffect, useState } from "react";
import { ButtonSubmit, COMPONENT_STATUS, InputFile } from "../../common";
import { useSelector } from "react-redux";
import { MEDIA_TYPES } from "../utils/settingMediaUtils";
import { useParams, useHistory } from "react-router-dom";
import { SettingService } from "../redux/services";
import toastr from "toastr";

const SettingMediaCreateWrapper = () => {
  const history = useHistory();
  const { typeName } = useParams();
  const { user } = useSelector((state) => state.auth);
  const [currentMedia, setCurrentMedia] = useState(null);
  const [status, setStatus] = useState(null);
  useEffect(() => {
    const temp = MEDIA_TYPES.find(({ name }) => name === typeName);
    if (!temp) return history.push("/setting");
    setCurrentMedia(temp);
  }, [typeName]);

  const [data, setData] = useState({
    name: "test",
    currentcy: "USD",
  });

  const onChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (status === COMPONENT_STATUS.LOADING) return;
    setStatus(COMPONENT_STATUS.LOADING);
    const params = {
      ...data,
      metaverse_id: user?.meta_id,
      type_id: currentMedia.type_id,
    };
    SettingService.apiCreateMedia(params)
      .then((res) => {
        if (res.id > 0) {
          setStatus(COMPONENT_STATUS.SUCCESS);
          toastr.success(`Upload ${currentMedia.name} thành công`);
        } else {
          setStatus(COMPONENT_STATUS.ERROR);
          toastr.error(`Upload ${currentMedia.name} thất bại`);
        }
        history.push(`/setting/${currentMedia.name}`);
      })
      .catch((error) => {
        console.log("error", error);
        setStatus(COMPONENT_STATUS.ERROR);
        toastr.error(`Upload ${currentMedia.name} thất bại`);
        history.push(`/setting/${currentMedia.name}`);
      });
  };

  return currentMedia ? (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col items-start justify-center">
        <h1 className="text-white text-2xl font-bold capitalize">
          {currentMedia.name}
        </h1>
        <div className="w-3/4">
          <div>
            <div className="flex items-center mt-3">
              <p className="w-36 text-base text-white font-bold mb-0">Name</p>
              <div className="w-full flex items-center">
                <input
                  type="text"
                  name="name"
                  className="w-full auth-input mr-2 mb-0 py-1"
                  onChange={(e) => onChange("description", e.target.value)}
                  required
                />
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
                  onChange={(e) => onChange("description", e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex items-center mt-3">
              <p className="w-36 text-base text-white font-bold mb-0">Price</p>
              <div className="w-full flex items-center">
                <input
                  type="number"
                  name="price"
                  className="w-28 auth-input mr-2 mb-0 py-1"
                  onChange={(e) => onChange("price", e.target.value)}
                  min="0"
                  required
                />
                <span className="outline-none flex items-center justify-center whitespace-nowrap disabled:opacity-70 cursor-pointer disabled:cursor-not-allowed mx-2 text-white text-md px-4 py-1.5 rounded-lg bg-purple">
                  USD
                </span>
              </div>
            </div>
            <InputFile
              className="mt-3"
              label={currentMedia.name.replace(/\b\w/g, l => l.toUpperCase())}
              name="file"
              onChange={onChange}
              accept={currentMedia.accept}
              required
            />
            <InputFile
              className="mt-3"
              label="Cover"
              name="cover"
              onChange={onChange}
              accept="image/*"
              required
            />
            <div className="mt-4 text-right">
              <ButtonSubmit isFetching={status === COMPONENT_STATUS.LOADING}>
                Save
              </ButtonSubmit>
            </div>
          </div>
        </div>
      </div>
    </form>
  ) : (
    ""
  );
};

export default SettingMediaCreateWrapper;
