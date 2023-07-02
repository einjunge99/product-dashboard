import { Table } from "./table";

import styles from "./index.module.scss";
import { useDashboardState } from "./state/useDashboardState";
import { Input } from "../common/input";
import { Button } from "../common/button";

export const Dashboard = () => {
  const { loading, filteredProducts, search, navigateToProducts } =
    useDashboardState();

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
        <Table
          data={filteredProducts}
          loading={loading}
          isSearching={!!search.searchValue}
        />
        {filteredProducts && (
          <div className={styles.pagination}>
            <div
              className={styles.results}
            >{`${filteredProducts?.length} Resultados`}</div>
            {/* TODO: Add pagination */}
          </div>
        )}
      </div>
    </div>
  );
};
