import React from "react";
import Footer from "./Screens/Footer/index";
import { AppRoutes } from "./Routes";
import { Header } from "./Screens/Header/index";

export default function App() {
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}
