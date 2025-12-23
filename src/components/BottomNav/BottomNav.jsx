import { NavLink } from "react-router-dom";

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" end className="nav-item">
        <span className="nav-icon">🏠</span>
        <span className="nav-text">홈</span>
      </NavLink>

      <NavLink to="/pets" className="nav-item">
        <span className="nav-icon">🤍</span>
        <span className="nav-text">반려동물</span>
      </NavLink>

      <NavLink to="/medications" className="nav-item">
        <span className="nav-icon">💊</span>
        <span className="nav-text">투약</span>
      </NavLink>

      <NavLink to="/walks" className="nav-item">
        <span className="nav-icon">📍</span>
        <span className="nav-text">산책</span>
      </NavLink>

      <NavLink to="/health" className="nav-item">
        <span className="nav-icon">📅</span>
        <span className="nav-text">건강일정</span>
      </NavLink>
    </nav>
  );
};

export default BottomNav;
