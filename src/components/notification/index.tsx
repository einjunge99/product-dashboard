import cx from "classnames";
import styles from "./index.module.scss";
import { useNotificationState } from "./state/useNotificationState";

export const NotificationBar = () => {
  const { error, handleCloseClick, message } = useNotificationState();

  return (
    <div className={styles.content}>
      {message && (
        <div className={cx(styles.alert, styles.success)}>
          {message}
          <button onClick={handleCloseClick}>Cerrar</button>
        </div>
      )}
      {error && (
        <div className={cx(styles.alert, styles.danger)}>
          {error}
          <button onClick={handleCloseClick}>Cerrar</button>
        </div>
      )}
    </div>
  );
};
