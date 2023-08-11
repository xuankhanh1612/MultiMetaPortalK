import React from "react";
import toastr from "toastr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Popconfirm } from "antd";

const SettingMetaWrapper = () => {
  const { user } = useSelector((state) => state.auth);
  const [users, setUsers] = useState([user]);

  const handleSave = () => {
    toastr.success("Successful");
  };

  const handleDeleteUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  const handleAddUser = (e) => {
    e.preventDefault();

    const newUsers = [
      ...users,
      {
        id: users.length + 1,
        first_name: "John",
        last_name: "Doe",
        email: "johndoe@gmail.com",
      },
    ];

    setUsers(newUsers);
  };

  return (
    <div className="max-w-2xl">
      <div className="w-full flex items-center justify-between text-white select-none">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="request-login"
            onChange={(value) => {}}
            value={""}
          />
          <label htmlFor="request-login" className="ml-2">
            {" "}
            Login request
          </label>
        </div>
      </div>
      <p className="text-white text-lg font-bold mt-3">Share your metaverse</p>
      <form onSubmit={handleAddUser}>
        <input
          type="email"
          placeholder="Add Email"
          className="setting-input"
          // onChange={(value) => setDomain(value)}
          // value={domain}
        />
      </form>
      <p className="text-white mb-2 mt-3">Những người có quyền truy cập</p>
      <div className="grid grid-cols-2">
        {users.map((user) => (
          <div key={user.id} className="mb-5">
            <div className="flex items-center">
              <img
                src={`https://ui-avatars.com/api/?name=${`${user.first_name} ${user.last_name}`}&background=fff&color=3d3d3d`}
                class="rounded-full w-12 mr-3"
                alt="Avatar"
              />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-base text-white font-bold mb-0">
                    {`${user.first_name} ${user.last_name}`}
                  </p>
                  <p className="text-sm text-secondary font-medium mb-0">
                    {user.email}
                  </p>
                </div>
                <Popconfirm
                  title="Delete this user?"
                  onConfirm={() => handleDeleteUser(user.id)}
                  okText="Delete"
                  cancelText="Cancel"
                >
                  <div className="ml-5 cursor-pointer flex items-center justify-center w-6 h-6">
                    <FontAwesomeIcon
                      className="text-white select-none"
                      icon={faEllipsisV}
                    />
                  </div>
                </Popconfirm>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-end mt-6">
        <button
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          type="submit"
          className="mx-2 text-secondary font-bold border border-secondary text-md px-4 py-2 rounded-lg bg-transparent cursor-pointer"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          type="submit"
          className="flex items-center justify-center whitespace-nowrap block disabled:opacity-70 cursor-pointer disabled:cursor-not-allowed ml-2 text-white font-bold text-md px-4 py-2 rounded-lg bg-secondary"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default SettingMetaWrapper;
