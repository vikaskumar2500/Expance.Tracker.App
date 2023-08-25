import { Button } from "react-bootstrap";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { UserAuth } from "../../auth-context/AuthContext";
import { auth } from "../../firebaseConfig";
import { useHistory } from "react-router-dom";

const Header = () => {
  const { logoutUser } = UserAuth();
  const history = useHistory();

  const logoutHandler = () => {
    console.log(auth);
    logoutUser(auth)
      .then(() => {
        console.log("Successfully logout User");
        history.push('/signup');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

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

          <Button variant="light" className="logout" onClick={logoutHandler}>
            LOGOUT
          </Button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
