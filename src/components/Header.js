import { Link } from "react-router-dom";
import React, { useState } from "react";
import "antd/dist/antd.css";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const SideBar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button
        onClick={showDrawer}
        type="primary"
        shape="round "
        icon={<MenuOutlined />}
      ></Button>
      <Drawer placement="left" onClose={onClose} visible={visible}>
        <Link onClick={onClose} to="/">
          Home
        </Link>
        <br />
        <Link onClick={onClose} to="/Table">
          Table
        </Link>
      </Drawer>
    </>
  );
};

export default SideBar;
