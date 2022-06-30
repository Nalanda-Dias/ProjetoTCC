import { useEffect, useState } from "react";
import { createContext } from "react";
import { persistReducer, persistStore } from "redux-persist";

export const CompraContext = createContext();

export const CompraProvider = ({ children }) => {
  const [compra, setCompra] = useState({});
  const [total, setTotal] = useState(0);

  // const storage =  {
  //   compra: compra,
  //   total: total
  // }

  // const persistConfig = {
  //   key: 'root',
  //   storage
  // }

  // const presistedReducer = persistReducer(persistConfig);
  // const store = persistStore(presistedReducer);
  // console.log("Store", store);

  return (
    <CompraContext.Provider
      value={{ compra, setCompra, total, setTotal }}
    >
      {children}
    </CompraContext.Provider>
  );
};
