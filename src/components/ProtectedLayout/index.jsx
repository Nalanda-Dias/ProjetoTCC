// eslint-disable-next-line
import react, { useEffect } from "react";
import { useAuth } from "../../context/AuthProvider/useAuth";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedLayout = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  useEffect(() => {
    console.log(auth.token != null)
    if (auth.token == null) {
      <Navigate to="/" state={{ from: location }} replace></Navigate>;
    }
  }, [auth.token]);

  return children;
};
