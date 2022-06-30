import React from "react";
import Footer from "./Screens/Footer/index";
import { AppRoutes } from "./Routes";
import { Header } from "./Screens/Header/index";
import { AuthProvider } from "./context/AuthProvider";
import { ProdutoProvider } from "./context/ProdutoProvider";
import { Router } from "react-router";

export default function App() {
  return (
    <>
      <AuthProvider>
        <ProdutoProvider> 
          <Header />
          <AppRoutes />
          <Footer />
        </ProdutoProvider>
      </AuthProvider>
    </>
  );
}
