import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Carrinho from "../Screens/Carrinho";
import Detalhe from "../Screens/Detalhe/index";
import Games from "../Screens/Games";
import Hardware from "../Screens/Hardware/indes";
import Home from "../Screens/Home/index";
import LoginCad from "../Screens/LoginCad/index";
import Pcs from "../Screens/Pcs";
import Perifericos from "../Screens/Perifericos";
import Pagamento from "../Screens/Pagamento/index";
import Confirmacao from "../Screens/Confirmacao/index";
import Agendamento from "../Screens/Agendamento/index";
import { ProtectedLayout } from "../components/ProtectedLayout";
import { CompraProvider } from "../context/CompraProvider";
export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<LoginCad />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/games" exact element={<Games />} />
        <Route path="/hardware" exact element={<Hardware />} />
        <Route path="/perifericos" exact element={<Perifericos />} />
        <Route path="/pcs" exact element={<Pcs />} />
        <Route
          path="/carrinho"
          exact
          element={
            <ProtectedLayout>
              <CompraProvider>
                <Carrinho />
              </CompraProvider>
            </ProtectedLayout>
          }
        />
        <Route path="/detalhes/:id" exact element={<Detalhe />} />
        <Route
          path="/pagamento"
          exact
          element={
            <ProtectedLayout>
              <CompraProvider>
                <Pagamento />
              </CompraProvider>
            </ProtectedLayout>
          }
        />
        <Route
          path="/confcompra"
          exact
          element={
            <ProtectedLayout>
              <CompraProvider>
                <Confirmacao />
              </CompraProvider>
            </ProtectedLayout>
          }
        />
        <Route
          path="/agendamento"
          exact
          element={
            <ProtectedLayout>
              <Agendamento />
            </ProtectedLayout>
          }
        />
      </Routes>
    </Router>
  );
};
