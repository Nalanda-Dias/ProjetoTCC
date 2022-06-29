import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Carrinho from "../Screens/Carrinho";
import Detalhe from "../Screens/Detalhe/index";
import Games from "../Screens/Games";
import Hardware from "../Screens/Hardware/indes";
import { Header } from "../Screens/Header/index";
import Home from "../Screens/Home/index";
import LoginCad from "../Screens/LoginCad/index";
import Pcs from "../Screens/Pcs";
import Perifericos from "../Screens/Perifericos";
import Pagamento from "../Screens/Pagamento/index";
import Confirmacao from "../Screens/Confirmacao/index";
import Boleto from "../Screens/Pagamento/boleto";
import Cartao from "../Screens/Pagamento/Cartao";
import Agendamento from "../Screens/Agendamento/index";
import { AuthProvider } from "../context/AuthProvider";
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
        <Route path="/carrinho" exact element={<Carrinho />} />
        <Route path="/detalhes/:id" exact element={<Detalhe />} />
        <Route path="/pagamento" exact element={<Pagamento />} />
        <Route path="/boleto" exact element={<Boleto />} />
        <Route path="/cartao" exact element={<Cartao />} />
        <Route path="/confcompra" exact element={<Confirmacao />} />
        <Route path="/agendamento" exact element={<Agendamento />} />
      </Routes>
    </Router>
  );
};
