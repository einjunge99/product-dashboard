import { useSelector, useDispatch } from "react-redux";
import { clearNotifications } from "../../reducers/notifications";
import { getNotifications } from "../../selectors/notifications";
import styles from "./index.module.scss";

export const NotificationBar = () => {
  const { message, error } = useSelector(getNotifications);
  const dispatch = useDispatch();

  const handleCloseClick = () => {
    dispatch(clearNotifications());
  };

  return (
    <div className={styles.content}>
      {message && (
        <div className={styles.success}>
          {message}
          <button onClick={handleCloseClick}>Cerrar</button>
        </div>
      )}
      {error && (
        <div className={styles.error}>
          {error}
          <button onClick={handleCloseClick}>Cerrar</button>
        </div>
      )}
    </div>
  );
};
