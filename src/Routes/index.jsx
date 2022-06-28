import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Carrinho from '../Screens/Carrinho';
import Detalhe from '../Screens/Detalhe/index';
import Games from '../Screens/Games';
import Hardware from '../Screens/Hardware/indes';
import { Header } from '../Screens/Header/index';
import Home from '../Screens/Home/index';
import LoginCad from '../Screens/LoginCad/index';
import Pcs from '../Screens/Pcs';
import Perifericos from '../Screens/Perifericos';


export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                    <Route path="/login" exact element={<LoginCad/>}/>
                    <Route path="/home" exact element={<Home/>}/>
                    <Route path="/games" exact element={<Games/>}/>
                    <Route path="/hardware" exact element={<Hardware/>}/>
                    <Route path="/perifericos" exact element={<Perifericos/>}/>
                    <Route path="/pcs" exact element={<Pcs/>}/>
                    <Route path="/carrinho" exact element={<Carrinho/>}/>
                    <Route path="/detalhes" exact element={<Detalhe/>}/>
            </Routes>
        </Router>
    )
}