import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "primereact/resources/themes/lara-dark-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { createRoot } from "react-dom/client";

import Login from "./pages/login/Login";
import Index from "./pages/index/Index";

createRoot(document.getElementById('root')).render(
 <PrimeReactProvider>
  <BrowserRouter>

    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Index />}/>
    </Routes>

  </BrowserRouter>
  </PrimeReactProvider>

);