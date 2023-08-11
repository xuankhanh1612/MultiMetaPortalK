import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toastr from "toastr";
import { authAction } from "modules/auth/redux/actions";
import metaDesignImg from "modules/home/assets/images/meta-design.png";

const SettingMetaDomainWrapper = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [domain, setDomain] = useState(
    user?.domain?.split(".multimeta.one")[0] || "sample"
  );

  useEffect(() => {
    dispatch(authAction.getUserInfo());
  }, [dispatch]);

  const handleSaveDomain = () => {
    //
    toastr.success("Successful");
  };

  return (
    <>
      <div className="flex items-center justify-between text-white">
        <div className="flex items-center">
          <p className="mb-0 font-bold text-lg mr-3.5">URL</p>
          <input
            type="text"
            className="setting-input"
            onChange={(value) => setDomain(value)}
            value={domain}
          />
          <p className="mb-0 ml-1">.multimeta.one</p>
        </div>
        <div className="flex items-center">
          <button
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            type="submit"
            className="mx-2 text-secondary font-bold border border-secondary text-md px-4 py-2 rounded-lg bg-transparent cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveDomain}
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            type="submit"
            className="flex items-center justify-center whitespace-nowrap block disabled:opacity-70 cursor-pointer disabled:cursor-not-allowed mx-2 text-white font-bold text-md px-4 py-2 rounded-lg bg-secondary"
          >
            Save
          </button>
        </div>
      </div>
      <img src={metaDesignImg} alt="" className="mt-10" />
    </>
  );
};

export default SettingMetaDomainWrapper;
