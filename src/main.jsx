import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";

import Login from "./pages/login/Login";
import Index from "./pages/index/Index";

createRoot(document.getElementById('root')).render(

  <BrowserRouter>

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/index" element={<Index />}/>
    </Routes>

  </BrowserRouter>

);