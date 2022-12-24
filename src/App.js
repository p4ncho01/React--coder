import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./components/Checkout";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListcontainer";

import Cartwidget from "./components/CartWidget";
import ContextContainer from "./components/ContextContainer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ContextContainer>
      <BrowserRouter>
        {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS */}
        <Navbar />
        {/* ACA DECLARO RUTAS PUNTUALES */}
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cartwidget />} />

          {/* <Route path="/item/:iditem" element={<ItemDetailContainer />} /> */}
          <Route />
          <Route />
          <Route />
        </Routes>
        <Footer />
        {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS ABAJO DE TODO*/}
      </BrowserRouter>
    </ContextContainer>
  );
}