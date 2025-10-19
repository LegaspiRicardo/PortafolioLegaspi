// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import Portfolio from "./Portfolio";
import DetalleCasaXavier from "./pages/DetalleCasaXavier";
import DetalleRadicalBoards from "./pages/DetalleRadicalBoards";
import DetalleClinicaDental from "./pages/DetalleClinicaDental";
import DetalleTiendaEpos from "./pages/DetalleTiendaEpos";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/detalle-casa-xavier" element={<DetalleCasaXavier />} />
        <Route path="/detalle-radical-boards" element={<DetalleRadicalBoards />} />
        <Route path="/detalle-clinica-dental" element={<DetalleClinicaDental />} />
        <Route path="/detalle-tienda-epos" element={<DetalleTiendaEpos />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
