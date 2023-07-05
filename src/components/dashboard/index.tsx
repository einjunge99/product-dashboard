import { Table } from "./table";

import styles from "./index.module.scss";
import { useDashboardState } from "./state/useDashboardState";
import { Input } from "../common/input";
import { Button } from "../common/button";
import { Pagination } from "./pagination";

// TODO: Add min width and overflow...
export const Dashboard = () => {
  const { loading, currentItems, search, navigateToProducts, pagination } =
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
          data={currentItems ?? null}
          loading={loading}
          isSearching={!!search.searchValue}
        />
        {!loading && (
          <>
            <div className={styles.pagination}>
              <div className={styles.results}>{pagination.resultsLegend}</div>
              <Pagination {...pagination} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
