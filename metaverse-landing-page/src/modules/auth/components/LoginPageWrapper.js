import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import fbIcon from "../../common/assets/icons/fb.png";
import ggIcon from "../../common/assets/icons/google.png";
import Footer from "../../common/components/Footer";
import Header from "../../common/components/Header";
import { authAction } from "../redux/actions";

const LoginPageWrapper = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const authState = useSelector((state) => state.auth);
  const { isFetchingLogin, user } = authState;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (!!user) {
      history.push("/");
    }
  }, [JSON.stringify(user), history]);

  const handleLogin = (data) => {
    const { email, password } = data;
    if (email && password) {
      dispatch(authAction.login(data));
      history.push("/");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Header />
      <div className="bg-hero h-screen flex flex-col items-center justify-center">
        <h1 className="home-hero__heading text-white mt-16 text-2xl md:text-3xl lg:text-5xl font-bold">
          Login
        </h1>
        <form
          className="auth-form py-7 px-7 pb-4 sm:py-12 sm:px-12 sm:pb-6 rounded-2xl flex flex-col items-center justify-center"
          onSubmit={handleSubmit((data) => handleLogin(data))}
        >
          <input
            className="auth-input"
            {...register("email", { required: true })}
            placeholder="Enter your email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-400 italic -mt-2 mr-auto">
              Email is required
            </p>
          )}
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
          {errors.password?.type === "required" && (
            <p className="text-red-400 italic -mt-2 mr-auto">
              Password is required
            </p>
          )}
          <div className="w-full flex items-center justify-between text-white">
            <Link to="/forgot-password" className="text-white">
              Forgot password?
            </Link>
            <div className="flex items-center select-none">
              <input type="checkbox" id="remember" {...register("remember")} />
              <label htmlFor="remember" className="ml-2">
                Remember me
              </label>
            </div>
          </div>
          <button
            onClick={handleLogin}
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            type="submit"
            className="flex items-center justify-center mt-5 text-primary font-bold text-md px-11 py-3 rounded-lg bg-secondary cursor-pointer"
          >
            {isFetchingLogin && (
              <div className="flex items-center justify-center space-x-2 mr-2">
                <div
                  className="spinner-border animate-spin inline-block w-3 h-3 border rounded-full"
                  role="status"
                ></div>
              </div>
            )}
            Login
          </button>

          <Link to="/signup" className="text-secondary font-normal mt-3.5">
            Create account
          </Link>
        </form>
        <div className="mt-5 text-center">
          <div className="social-login-text">or login with:</div>
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

export default LoginPageWrapper;
