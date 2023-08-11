import React from "react";
import { Link } from "react-router-dom";
import HeaderLogo from "../assets/images/logo-multimeta.svg";
import fbIcon from "../assets/icons/fb.png";
import twIcon from "../assets/icons/twitter.png";
import ytIcon from "../assets/icons/youtube.png";

const Footer = () => {
  return (
    <div className="bg-primary text-white pt-10">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
          <div className="meta-address">
            <Link to="/">
              <img
                className="h-14 md:h-16 lg:h-20"
                src={HeaderLogo}
                alt="Multimeta"
              />
            </Link>
            <ul className="text-sm mt-3.5">
              <li className="mb-2">
                Address: 470 North Bridge Road #05-12 Bugis Cube, Singapore{" "}
              </li>
              <li className="mb-2">Email: contact@multimeta.one </li>
              <li className="mb-2">Hotline: 0988712717</li>
            </ul>
          </div>
          <div className="meta-support-links mt-3 md:mt-0 flex items-start justify-between">
            <div className="flex flex-col">
              <div className="text-md font-bold mb-2">LEGAL</div>
              <ul>
                <li className="mb-2">
                  <Link to="/term">Terms & Conditions</Link>
                </li>
                <li className="mb-2">
                  <Link to="/license">License Agreement</Link>
                </li>
                <li className="mb-2">
                  <Link to="/privacy">Privacy policy</Link>
                </li>
                <li className="mb-2">
                  <Link to="/copy-right">Copyright information</Link>
                </li>
                <li className="mb-2">
                  <Link to="/cookie">Cookies policy</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col ml-20">
              <div className="text-md font-bold mb-2">HELP</div>
              <ul>
                <li className="mb-2">
                  <Link to="/">Support</Link>
                </li>
                <li className="mb-2">
                  <Link to="/">Contact</Link>
                </li>
              </ul>
              <div className="text-md font-bold mb-2">SOCIAL MEDIA</div>
              <div className="flex items-center">
                <Link to="/">
                  <img className="h-6 w-6 mr-2.5" src={fbIcon} alt="Facebook" />
                </Link>
                <Link to="/">
                  <img className="h-6 w-6 mr-2.5" src={twIcon} alt="Twitter" />
                </Link>
                <Link to="/">
                  <img className="h-6 w-6 mr-2.5" src={ytIcon} alt="Youtube" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
