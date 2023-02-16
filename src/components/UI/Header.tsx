import { Link } from "react-router-dom";
import Navbar from "./WeatherPage/Navbar";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <section className={classes.header}>
      <section className={classes["header-logo"]}>
        <Link to="/">weatherz</Link>
      </section>
      <div className={classes["header-navigation"]}>
        <Navbar />
      </div>
      <div className={classes.buttons}>
        <button className={classes["h-btn"]}>24h</button>
        <button className={classes["login-btn"]}>Login</button>
      </div>
    </section>
  );
};

export default Header;
