import { BsCart, BsHeartFill, 
  BsHouseDoor, BsController,
  BsReverseLayoutTextWindowReverse,BsMouse2, 
  BsDisplay } from "react-icons/bs";
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
      <Content className="content">
      <div className="tentativa">
        <a href="/home"><SidebarItem Icon={BsHouseDoor} Text="Home" /></a>
        <SidebarItem Icon={BsController} Text="Games" />
        <SidebarItem Icon={BsReverseLayoutTextWindowReverse} Text="Hardware" />
        <SidebarItem Icon={BsMouse2} Text="Periféricos" />
        <SidebarItem Icon={BsDisplay} Text="Pcs" />

        </div>
        <SidebarItem Icon={FaUserAlt} Text="Minha conta" />
        <SidebarItem Icon={BsCart} Text="Meus pedidos" />
        <SidebarItem Icon={BsHeartFill} Text="Favoritos"  />
       
      </Content>
    </Container>
  );
};

export default Sidebar;
