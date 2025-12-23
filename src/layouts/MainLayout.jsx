import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import BottomNav from "../components/BottomNav/BottomNav";

const MainLayout = () => {
  return (
    <div className="app">
      <Header />
      <main className="content">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};

export default MainLayout;
