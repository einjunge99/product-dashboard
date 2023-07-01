import { Table } from "./table";

import styles from "./index.module.scss";
import { useDashboardState } from "./state/useDashboardState";

export const Dashboard = () => {
  const { loading, hasError, filteredProducts, search } = useDashboardState();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (hasError) {
    return <h1>Error</h1>;
  }

  return (
    <>
      <div className={styles.content}>
        <div className={styles.actions}>
          <input
            placeholder="Search..."
            value={search.searchValue}
            onChange={search.handleSearchChange}
            className={styles.input}
          />
          <button className={styles.button}>Agregar</button>
        </div>

        <div className={styles.container}>
          <Table data={filteredProducts} />
        </div>
      </div>
    </>
  );
};
