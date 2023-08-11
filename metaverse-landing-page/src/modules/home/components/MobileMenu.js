import React, { useState } from "react";
import { Button, Drawer, Menu } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="block sm:hidden">
      <Button type="text" onClick={showDrawer}>
        <FontAwesomeIcon
          icon={faBars}
          style={{ color: "#fff", fontSize: 18 }}
        />
      </Button>
      <Drawer
        width={250}
        title="Menu"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <Menu>
          <Menu.Item>
            <Link to="/login">Login</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/signup">Create an account</Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </div>
  );
};

export default MobileMenu;
