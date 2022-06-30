import { useEffect, useState } from "react";
import { createContext } from "react";
import { persistReducer, persistStore } from "redux-persist";

export const CompraContext = createContext();

export const CompraProvider = ({ children }) => {
  const [compra, setCompra] = useState({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(JSON.parse(window.localStorage.getItem("total")));
    setCompra(JSON.parse(window.localStorage.getItem("compra")));
  }, []);

  console.log("antes", compra);

  useEffect(() => {
    if (compra != null && compra != {} && total != 0 && total != null) {
      console.log("compra", compra)
      window.localStorage.setItem("total", total);
      window.localStorage.setItem("compra", JSON.stringify(compra));
    }
  }, [compra, total]);

  return (
    <CompraContext.Provider value={{ compra, setCompra, total, setTotal }}>
      {children}
    </CompraContext.Provider>
  );
};
