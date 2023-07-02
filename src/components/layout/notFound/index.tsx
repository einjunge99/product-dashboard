import styles from "./index.module.scss";
import { useNotFoundState } from "./state/useNotFoundState";

export const NotFound = () => {
  const { returnToHome } = useNotFoundState();
  return (
    <div className={styles.content}>
      <h1>404 Page Not Found</h1>
      <button onClick={returnToHome}>Regresar a inicio</button>
    </div>
  );
};
