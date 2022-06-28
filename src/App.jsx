
import React from "react";
import Footer from "./Screens/Footer/index";
import { AppRoutes } from "./Routes";
import { Header } from "./Screens/Header/index";
import Menu from "./Screens/SideBar/index";


export default function App() {
  return (
    <>

        < Header />
        <Menu/>
      <AppRoutes/>
      <br/>
        <Footer />

    </>
  );
}

