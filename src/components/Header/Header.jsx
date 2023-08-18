import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <h2>Expenses Control</h2>
        <ul className="list">
          <li>
            <NavLink
              to="/"
              activeClassName={({ isActive }) =>
                "nav-link" + (isActive ? "active" : undefined)
              }
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/product">PRODUCT</NavLink>
          </li>
          <li>
            <NavLink to="/signup">SIGNUP</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
