import Home from "./Pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HOME, LOGIN, PACIENTES, EDITAR, DOCTORES, ADMIN } from "./Routers/router";

import LoginPage from "./Pages/LoginPage";
import ViewPacientes from "./Pages/ViewPacientes";
import ViewDoctores from "./Pages/ViewDoctores";
import EditarPage from "./Pages/EditarPage";
import AdminPage from "./Pages/AdminPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={LOGIN} element={<LoginPage />} />
        <Route path={ADMIN} element={<AdminPage />} />
        <Route path={PACIENTES} element={<ViewPacientes />} />
        <Route path={DOCTORES} element={<ViewDoctores />} />
        <Route path={EDITAR} element={<EditarPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;