import { BsCart, BsHeartFill } from "react-icons/bs";
// export default Menu

import React from "react";
import { Container, Content } from "./styles";
import { FaTimes, FaUserAlt } from "react-icons/fa";
import SidebarItem from "../SidebarItem";
import "./styles.css";

const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container className="sidebar" sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <SidebarItem Icon={FaUserAlt} Text="Minha conta" />
        <SidebarItem Icon={BsCart} Text="Meus pedidos" />
        <SidebarItem Icon={BsHeartFill} Text="Favoritos" />
      </Content>
    </Container>
  );
};

export default Sidebar;
