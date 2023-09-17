import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <div className="header-container">
        <div className="left-links">
          <NavLink to="/home" className="link-home">
            pay equity tracker
          </NavLink>
        </div>
        <div className="right-links">
          <NavLink to="/forum" className="header-link">
            Forum
          </NavLink>

          <NavLink to="/profile" className="header-link">
            Profile
          </NavLink>

          <NavLink to="/" className="header-link">
            Log out
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
