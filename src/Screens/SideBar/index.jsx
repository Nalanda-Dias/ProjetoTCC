import {
  BsCart, BsHeartFill,
  BsHouseDoor, BsController,
  BsReverseLayoutTextWindowReverse, BsMouse2,
  BsDisplay
} from "react-icons/bs";
// export default Menu

import React from "react";
import { Container, Content } from "./styles";
import { FaTimes, FaUserAlt } from "react-icons/fa";
import SidebarItem from "../SidebarItem";
import "./styles.css";
import Avatar from "../../assents/Avatar.png";

const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container className="sidebar" sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content className="content">
        <div className="tentativa">
  
          <a href="/home" className="linkk"><SidebarItem Icon={BsHouseDoor} Text="Home" /></a>
          <a href="/games" className="linkk"><SidebarItem Icon={BsController} Text="Games" /></a>
          <a href="/hardware" className="linkk"><SidebarItem Icon={BsReverseLayoutTextWindowReverse} Text="Hardware" /></a>
          <a href="/perifericos" className="linkk"><SidebarItem Icon={BsMouse2} Text="Periféricos" /></a>
          <a href="/pcs" className="linkk"><SidebarItem Icon={BsDisplay} Text="Pcs" /></a>

        </div>
        <SidebarItem Icon={FaUserAlt} Text="Minha conta" />
        <SidebarItem Icon={BsCart} Text="Meus pedidos" />
        <a href="/agendamento" className="linkk"><SidebarItem Icon={BsHeartFill} Text="Favoritos" /></a>
      </Content>
    </Container>
  );
};

export default Sidebar;
