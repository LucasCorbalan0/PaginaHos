import { Routes, Route, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HOME, LOGIN,  DOCTORES, PACIENTES, VIEWDOCTORES, VIEWPACIENTES, EDITARDOCTORES, EDITARPACIENTES } from "./Routers/router";

import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage"
import ViewDoctores from './Pages/ViewDoctores';
import ViewPacientes from './Pages/ViewPacientes';
import EditDoctores from './Pages/DoctorEdit';
import EditPacientes from './Pages/PacienteEdit';
import DoctorPage from "./Pages/DoctorPage";
import PacientePage from "./Pages/PacientePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={LOGIN} element={<LoginPage />} />
        <Route path={DOCTORES} element={<DoctorPage />} />
        <Route path={PACIENTES} element={<PacientePage />} />
        <Route path={`${EDITARDOCTORES}/:id`} element={<EditDoctores />} />
        <Route path={`${EDITARPACIENTES}/:id`} element={<EditPacientes />} />
        <Route path={`${VIEWDOCTORES}/:id`} element={<ViewDoctores />} />
        <Route path={`${VIEWPACIENTES}/:id`} element={<ViewPacientes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;