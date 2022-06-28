import React, { createContext, useEffect, useState } from "react";
import { getUserLocalStorage, LoginRequest, RegisterRequest, setUserLocalStorage } from "./util";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = getUserLocalStorage();

    if (user) {
      setUser(user);
    }
  }, []);

  async function authenticate(email, password) {
    const response = await LoginRequest(email, password);
    console.log(response);
    const payload = {
      token: response.data.token,
      role: response.data.role,
      expiracao: response.data.expiracao,
      nome: response.data.nome
    };
    console.log(payload);
    setUser(payload);
    setUserLocalStorage(payload);
  }

  async function register(cliente) {
    const response = await RegisterRequest(cliente);
    console.log(response)
    return response;
  }

  function logout() {
    setUser(null);
    setUserLocalStorage(null);
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
