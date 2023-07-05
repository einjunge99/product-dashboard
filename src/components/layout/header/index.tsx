import cx from "classnames";
import styles from "./index.module.scss";
import logo from "../../../assets/logo.png";
import { useHeaderState } from "./state/useHeaderState";

const COLORED_ROUTES = ["/"];

export const Header = () => {
  const { currentPath } = useHeaderState();
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
