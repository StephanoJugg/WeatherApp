import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <section className={classes.navbar}>
      <Link to="/" className={classes["navbar-item"]}>
        today
      </Link>
      <Link to="/hourly" className={classes["navbar-item"]}>
        hourly
      </Link>
      <Link to="/daily" className={classes["navbar-item"]}>
        daily
      </Link>
      <Link to="/weekly" className={classes["navbar-item"]}>
        weekly
      </Link>
      <Link to="/monthly" className={classes["navbar-item"]}>
        monthly
      </Link>
    </section>
  );
};

export default Navbar;
