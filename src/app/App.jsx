import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard/Dashboard";
import Pets from "../pages/Pets/Pets";
import Medications from "../pages/Medications/Medications";
import Walks from "../pages/Walks/Walks";
import Health from "../pages/Health/Health";
import Settings from "../pages/Settings/Settings";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/medications" element={<Medications />} />
        <Route path="/walks" element={<Walks />} />
        <Route path="/health" element={<Health />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default App;
