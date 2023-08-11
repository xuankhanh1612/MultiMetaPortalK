import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MobileMenu from "../../home/components/MobileMenu";
import HeaderLogo from "../assets/images/logo-multimeta.svg";
import AvatarDropdown from "./AvatarDropdown";

const Header = ({ solidBackground }) => {
  const { user } = useSelector((state) => state.auth);

  const [headerBackground, setHeaderBackground] = useState(
    solidBackground ? "bg-header-scroll" : "bg-header"
  );

  const listenScrollEvent = (e) => {
    if (solidBackground || window.scrollY > 400) {
      setHeaderBackground("bg-header-scroll");
    } else {
      setHeaderBackground("bg-header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const handleClickLogo = () => {
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  return (
    <header className={headerBackground}>
      <div className="container">
        <div className="flex items-center justify-between py-5">
          <div className="header-left">
            <Link to="/" onClick={handleClickLogo}>
              <img
                className="h-14 md:h-16 lg:h-20"
                src={HeaderLogo}
                alt="Multimeta"
              />
            </Link>
          </div>
          <div className="header-right items-center hidden sm:flex">
            {!user ? (
              <>
                <Link to="/login">
                  <button
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="bg-secondary rounded-3xl py-1 px-4 w-max text-primary font-medium"
                  >
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="ml-4 py-1 px-3 text-secondary font-medium rounded-3xl border border-secondary"
                  >
                    Create an account
                  </button>
                </Link>
              </>
            ) : (
              <AvatarDropdown />
            )}
          </div>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
