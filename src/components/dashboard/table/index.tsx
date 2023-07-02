import { IProduct } from "../../../reducers/products/interfaces";
import { formatDate } from "../../../utils";
import { ActionsMenu } from "../actionsMenu/index.tsx";
import { Avatar } from "../../common/avatar/index.tsx";
import { DASHBOARD_COLUMNS, ProductKey } from "../constants";
import styles from "./index.module.scss";
import { useTableState } from "./state/useTableState.ts";
import empty from "../../../assets/empty.png";

interface IProps {
  data: IProduct[] | null;
  loading: boolean;
  isSearching: boolean;
}

const onRenderValue = (column: ProductKey, row: IProduct) => {
  const value = row[column];

  const renderValues: { [K: string]: () => JSX.Element | string } = {
    default: () => value,
    [ProductKey.logo]: () => <Avatar imageUrl={value} />,
    [ProductKey.date_release]: () => formatDate(value),
    [ProductKey.date_revision]: () => formatDate(value),
  };

  const renderValue = renderValues[column] || renderValues.default;
  return renderValue();
};

export const Table = (props: IProps) => {
  const { showMenu, handleMenuClick, handleDelete, handleEdit } =
    useTableState();

  const renderHeader = () => {
    return (
      <tr>
        {DASHBOARD_COLUMNS.map(({ title, key }) => (
          <th key={key}>{title}</th>
        ))}
      </tr>
    );
  };

  const renderValues = () => {
    const { data, loading, isSearching } = props;
    let message: JSX.Element | null = null;
    const isDataEmpty = !data || data.length === 0;
    if (loading || (isDataEmpty && !isSearching)) {
      message = <h1>Cargando...</h1>;
    } else if (isDataEmpty && isSearching) {
      message = (
        <div>
          ¡Vaya, parece que no se encontró nada! Por favor, inténtalo nuevamente
          o verifica tus criterios de búsqueda.
          <img src={empty} alt="empty" />
        </div>
      );
    }
    if (message) {
      return (
        <tr>
          <td colSpan={DASHBOARD_COLUMNS.length} className={styles.noValues}>
            {message}
          </td>
        </tr>
      );
    }

    return data.map((data) => {
      const values = DASHBOARD_COLUMNS.map(({ key }) => {
        return { key, value: onRenderValue(key, data) };
      });
      return (
        <tr key={data.id}>
          {values.map(({ key, value }) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (key === "actions") {
              return (
                <td key={`${data.id}_${key}`}>
                  <ActionsMenu
                    showMenu={showMenu[data.id]}
                    productId={data.id}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    handleMenuClick={handleMenuClick}
                  />
                </td>
              );
            }
            return <td key={`${data.id}_${key}`}>{value}</td>;
          })}
        </tr>
      );
    });
  };

  return (
    <table className={styles.table}>
      <thead>{renderHeader()}</thead>
      <tbody>{renderValues()}</tbody>
    </table>
  );
};
