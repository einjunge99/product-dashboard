import styles from "./index.module.scss";
import { useNotificationState } from "./state/useNotificationState";

export const NotificationBar = () => {
  const { error, handleCloseClick, message } = useNotificationState();

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
