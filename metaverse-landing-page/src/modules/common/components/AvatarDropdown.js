import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AvatarDropdown = () => {
  const { user } = useSelector((state) => state.auth);
  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <Menu as="div" className="px-3 mt-6 relative block text-center">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="flex items-center cursor-pointer">
              <img
                src={
                  user?.avatar
                    ? `https://asset.airclass.io/public/${user.avatar}`
                    : `https://ui-avatars.com/api/?name=${user?.email}&background=fff&color=3d3d3d`
                }
                className="rounded-full w-12 mr-3"
                alt="Avatar"
              />
              <p className="text-white mb-0">{user?.email}</p>
            </Menu.Button>
          </div>
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items static className="avatar-dropdown-position">
              <Menu.Item>
                <Link
                  to="/setting/metaDomain"
                  className="flex items-center cursor-pointer px-4 py-2 text-gray-700"
                >
                  Setting
                </Link>
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div
                    onClick={logout}
                    className={
                      "block px-4 py-2 text-sm text-gray-700 cursor-pointer text-left"
                    }
                  >
                    Logout
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};
export default React.memo(AvatarDropdown);
