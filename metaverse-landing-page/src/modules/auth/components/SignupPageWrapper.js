import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import toastr from "toastr";
import fbIcon from "../../common/assets/icons/fb.png";
import ggIcon from "../../common/assets/icons/google.png";
import Footer from "../../common/components/Footer";
import Header from "../../common/components/Header";
import { authAction } from "../redux/actions";

const SignupPageWrapper = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const website = useSelector((state) => state.caches.website);
  const { isFetchingLogin } = authState;
  const { register, handleSubmit } = useForm();
  const [agreedTerms, setAgreedTerms] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = (data) => {
    data.meta_group_id = website.id;
    dispatch(
      authAction.signup(data, () => {
        toastr.success("Đăng ký tài khoản thành công");
        history.push("/");
      })
    );
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Header />
      <div className="bg-hero h-screen flex flex-col items-center justify-center">
        <h1 className="home-hero__heading mt-16 text-white text-2xl md:text-3xl lg:text-5xl font-bold">
          Create a Free Account
        </h1>
        <form
          className="auth-form py-7 px-7 pb-4 sm:py-12 sm:px-12 sm:pb-9 rounded-2xl flex flex-col items-center justify-center"
          onSubmit={handleSubmit((data) => handleSignup(data))}
        >
          <input
            className="auth-input"
            {...register("email", { required: true })}
            placeholder="Enter your email"
          />
          {/* <input
            className="auth-input"
            {...register("username")}
            placeholder="Username"
          /> */}
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
          <div className="w-full flex items-center justify-between text-white select-none">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                onChange={() => setAgreedTerms(!agreedTerms)}
                checked={agreedTerms}
              />
              <label htmlFor="terms" className="ml-2">
                {" "}
                I agree with the terms of service.
              </label>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Link to="/login">
              <button
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                type="button"
                className="mt-5 mx-2 text-secondary font-bold border border-secondary text-md px-11 py-3 rounded-lg bg-transparent cursor-pointer"
              >
                Login
              </button>
            </Link>
            <button
              disabled={!agreedTerms}
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              type="submit"
              className="flex items-center justify-center whitespace-nowrap block disabled:opacity-70 cursor-pointer disabled:cursor-not-allowed mt-5 mx-2 text-primary font-bold text-md px-11 py-3 rounded-lg bg-secondary"
            >
              {isFetchingLogin && (
                <div className="flex items-center justify-center space-x-2 mr-2">
                  <div
                    className="spinner-border animate-spin inline-block w-3 h-3 border rounded-full"
                    role="status"
                  ></div>
                </div>
              )}
              Sign Up
            </button>
          </div>
        </form>
        <div className="mt-5 text-center">
          <div className="social-login-text">Already have an account?</div>
          <div className="mt-2 flex items-center">
            <button
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="bg-white font-bold text-md flex items-center mx-1.5 px-3 py-3 rounded-lg"
            >
              <img className="h-6 w-6 mr-2" src={ggIcon} alt="Google" />
              Google
            </button>
            <button
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="bg-white font-bold text-md flex items-center mx-1.5 px-3 py-3 rounded-lg"
            >
              <img className="h-6 w-6 mr-2" src={fbIcon} alt="Facebook" />
              Facebook
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignupPageWrapper;
