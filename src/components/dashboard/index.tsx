import { Table } from "./table";

import styles from "./index.module.scss";
import { useDashboardState } from "./state/useDashboardState";
import { Input } from "../common/input";
import { Button } from "../common/button";

export const Dashboard = () => {
  const { loading, hasError, filteredProducts, search, navigateToProducts } =
    useDashboardState();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (hasError) {
    return <h1>Error</h1>;
  }

  return (
    <div className={styles.content}>
      <div className={styles.actions}>
        <Input
          placeholder="Search..."
          value={search.searchValue}
          onChange={search.handleSearchChange}
        />
        <Button onClick={navigateToProducts}>Agregar</Button>
      </div>

      <div className={styles.container}>
        <Table data={filteredProducts} />
      </div>
    </div>
  );
};
