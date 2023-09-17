import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <nav className="header"> 
            <div className="header-container">
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
        </nav>
    )
}

export default Header;