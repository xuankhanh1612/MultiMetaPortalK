import {
  faBasketShopping,
  faBook,
  faCircleQuestion,
  faEarthAmericas,
  faEnvelope,
  faGear,
  faGraduationCap,
  faPaperPlane,
  faVideo
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useLocation, useRouteMatch } from "react-router-dom";

const menuItems = [
  {
    title: "My Metaverse",
    icon: faEarthAmericas,
    href: "/setting/metaDomain",
  },
  { title: "Meta Setting", icon: faEnvelope, href: "/setting/metaSetting" },
  { title: "Audio", icon: faPaperPlane, href: "/setting/audio" },
  { title: "Video", icon: faVideo, href: "/setting/video" },
  { title: "Ebook", icon: faBook, href: "/setting/ebook" },
  { title: "Course", icon: faGraduationCap, href: "/setting/course" },
  { title: "Shop", icon: faBasketShopping, href: "/setting/shop" },
  { title: "Profile", icon: faGear, href: "/setting/profile" },
  { title: "Support", icon: faCircleQuestion, href: "/setting/support" },
];

const SidebarMenu = () => {
  const { url } = useRouteMatch();
  const { pathname } = useLocation();

  const [activeMenu, setActiveMenu] = useState(0);

  return (
    <div class="sidebar-menu shadow-md px-0 absolute">
      <ul class="relative">
        {menuItems.map((item, index) => (
          <li class="relative overflow-hidden">
            <Link
              class={`${
                pathname.includes(item.href) ? "menu-item-active" : ""
              } menu-item cursor-pointer flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:bg-gray-100 transition duration-300 ease-in-out`}
              data-mdb-ripple="true"
              data-mdb-ripple-color="#f2f2f2"
              to={item.href}
            >
              <FontAwesomeIcon style={{ color: "white" }} icon={item.icon} />
              <span className="ml-3 text-white">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;
