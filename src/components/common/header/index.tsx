import cx from "classnames";
import styles from "./index.module.scss";
import { useLocation } from "react-router-dom";
import logo from "../../../assets/logo.png";

const COLORED_ROUTES = ["/"];

export const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div
      className={cx(styles.header, {
        [styles.withBackground]: COLORED_ROUTES.includes(currentPath),
      })}
    >
      <img src={logo} />
    </div>
  );
};
