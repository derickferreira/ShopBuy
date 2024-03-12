// react-router
import { NavLink } from "react-router-dom";

// css
import classes from "./styles/Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <NavLink to="/" className={classes.title}>
        <div className={classes.shop}>Shop</div>
        <div className={classes.buy}>Buy</div>
      </NavLink>
      <nav className={classes.navbar}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </nav>
      <div className={classes.account_entry}>
        <li>
          <NavLink to="/signin">Sign In</NavLink>
        </li>
        <button>
          <NavLink to="/register">Register</NavLink>
        </button>
      </div>
    </header>
  );
};

export default Header;
