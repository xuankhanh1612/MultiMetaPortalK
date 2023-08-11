import { faEye, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rate } from "antd";
import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { authAction } from "../../auth/redux/actions";
import Footer from "../../common/components/Footer";
import Header from "../../common/components/Header";
import { metaActions } from "../redux/actions";
import toastr from "toastr";
import MetaItem from "./MetaItem";
import { useForm } from "react-hook-form";
import { MetaService } from "../redux/services";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const MetaDetailsWrapper = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector((state) => state.auth);
  const { id } = useParams();
  const {
    metaDetails: { dataDetails },
  } = useSelector((state) => state.meta);
  const authState = useSelector((state) => state.auth);
  const { isFetchingLogin } = authState;
  const { register, handleSubmit } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [usedModel, setUsedModel] = useState(false);
  const [isCreateModal, setIsCreateModal] = useState(true);
  const [meta3dModalId, setMeta3dModalId] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    dispatch(metaActions.getMetaDetails(id));
    if (user?.meta_id) {
      MetaService.getList3DmodelBỵMetaId(user.meta_id)
        .then((res) => {
          if (res?.results?.length) {
            setIsCreateModal(false);
            setMeta3dModalId(res.results[0].id);
            if (res.results[0].model3d_id == id) {
              setUsedModel(true);
            }
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  }, []);

  const getMetaImgList = (meta) => {
    const ret = [];
    if (meta?.images_link?.length) {
      meta.images_link.forEach((imgLink) => {
        console.log(imgLink);
        const imgObj = {
          original: imgLink,
          thumbnail: imgLink,
        };
        ret.push(imgObj);
      });
    }
    return ret;
  };

  const handleCreateMeta = () => {
    const params = {
      model3d_id: id,
    };
    if (isCreateModal) {
      MetaService.createMeta3DModel(params)
        .then((res) => {
          if (res?.data?.id) {
            callBackUseModelSuccess();
          } else {
            toastr.error("Use 3D model failed");
          }
        })
        .catch((error) => {
          console.log("error", error);
          toastr.error("Use 3D model error");
        });
    } else {
      params.meta3dModalId = meta3dModalId;
      MetaService.updateMeta3DModel(params)
        .then((res) => {
          callBackUseModelSuccess();
        })
        .catch((error) => {
          console.log("error", error);
          toastr.error("Use 3D model error");
        });
    }
  };

  const callBackUseModelSuccess = () => {
    toastr.success("Use this 3D model success");
    setUsedModel(true);
    if (user.domain) {
      setTimeout(() => {
        window.location.href = `https://${user.domain}`;
      }, 2000);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignup = (data) => {
    dispatch(
      authAction.signup(data, () => {
        toastr.success("Đăng ký tài khoản thành công");
        history.push("/");
      })
    );
  };

  return (
    <div>
      <Header solidBackground />
      <div className="meta-details pt-10 bg-primary">
        <div className="container">
          <div className="flex">
            <div className="w-full md:w-3/4">
              <div className="flex items-center justify-between mb-3">
                <div className="block">
                  <div className="text-secondary font-bold text-xl">
                    {dataDetails?.name}
                  </div>
                  <div className="text-secondary">
                    Metaverse 1/ Room/ Livingroom
                  </div>
                </div>
                <Rate
                  className="meta-rating"
                  disabled
                  defaultValue={4}
                  allowHalf
                />
              </div>
            </div>
            <div className="w-0 md:w-1/4"></div>
          </div>
          <div className="flex flex-col md:flex-row md:items-start">
            <div className="w-full md:w-3/4">
              <ImageGallery
                className="meta-details-gallery"
                thumbnailPosition="left"
                showBullets
                items={(dataDetails && getMetaImgList(dataDetails)) || images}
              />
            </div>
            <div className="w-full md:w-1/4">
              {!!user && !usedModel && (
                <div
                  onClick={handleCreateMeta}
                  className={`hover:opacity-80 cursor-pointer bg-secondary mx-auto md:mx-0 mt-10 md:mt-0 w-full md:w-40 lg:w-52 md:ml-auto py-2 text-center rounded-lg text-white font-bold text-lg`}
                >
                  Use this model
                </div>
              )}
              {!user?.id && (
                <form
                  className="mx-auto md:mx-0 md:mt-10 w-full md:w-40 lg:w-52 md:ml-auto py-2 rounded-2xl flex flex-col items-center justify-center"
                  onSubmit={handleSubmit((data) => handleSignup(data))}
                >
                  <input
                    className="auth-input"
                    {...register("email", { required: true })}
                    placeholder="Email"
                  />
                  <div className="relative flex items-center w-full">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="auth-input"
                      {...register("password", { required: true })}
                      placeholder="Password"
                    />
                    <FontAwesomeIcon
                      icon={faEye}
                      onClick={toggleShowPassword}
                      className="select-none absolute right-2 transform -translate-y-1/2 cursor-pointer"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      type="submit"
                      className="flex items-center justify-center whitespace-nowrap disabled:opacity-70 cursor-pointer disabled:cursor-not-allowed mx-2 text-white font-bold text-md px-12 py-3 rounded-lg"
                      style={{ background: "#6700ff" }}
                    >
                      {isFetchingLogin && (
                        <div className="flex items-center justify-center space-x-2 mr-2">
                          <div
                            className="spinner-border animate-spin inline-block w-3 h-3 border rounded-full"
                            role="status"
                          ></div>
                        </div>
                      )}
                      Create account
                    </button>
                  </div>
                </form>
              )}
              <div className="meta-stats mt-3 md:mt-2.5 flex flex-row md:flex-col items-start justify-between">
                <div className="text-sm md:text-base mx-0 my-0 md:mt-10 md:ml-24">
                  <FontAwesomeIcon icon={faEye} /> 11.024
                </div>
                <div className="text-sm md:text-base mx-0 my-0 md:mt-10 md:ml-24">
                  <FontAwesomeIcon icon={faHeart} /> 5.008
                </div>
                <div className="text-sm md:text-base mx-0 my-0 md:mt-10 md:ml-24">
                  <FontAwesomeIcon icon={faUser} /> 1.089
                </div>
              </div>
            </div>
          </div>

          <div className="text-secondary font-bold text-xl mt-10 mb-5">
            Related
          </div>
          <div className="meta-list mx-auto grid pb-7 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {new Array(4).fill({ id: "456" }).map((item, index) => (
              <Link to={`/metaverse/${item.id}`} key={item.id}>
                <MetaItem key={index} meta={item} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default React.memo(MetaDetailsWrapper);
