import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-icon">🖼️</div>
        <span className="logo-text">PetCare</span>
      </div>

      <button
        className="settings-btn"
        onClick={() => navigate("/settings")}
      >
        ⚙️
      </button>
    </header>
  );
};

export default Header;
