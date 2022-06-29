// eslint-disable-next-line
import react from "react"; 
import { useAuth } from "../../context/AuthProvider/useAuth";
import React from "react";
import { useHistory } from "react-router-dom";

export const ProtectedLayout = ({ children }) => {
  const auth = useAuth();
  const history = useHistory();

  if (!auth.token) {
    return history.push('/login')
  }

  return children;
};
