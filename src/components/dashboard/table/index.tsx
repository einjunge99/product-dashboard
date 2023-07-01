import { IProduct } from "../../../reducers/products/interfaces";
import { formatDate } from "../../../utils";
import { Avatar } from "../../common/avatar/index.tsx";
import { DASHBOARD_COLUMNS, ProductKey } from "../constants";
import styles from "./index.module.scss";

interface IProps {
  data: object[] | null;
}

const onRenderValue = (column: string, row: IProduct) => {
  const value = row[column];
  console.log("VALUE", value);

  const renderValues = {
    default: () => value,
    [ProductKey.logo]: () => {
      return <Avatar imageUrl={value} />;
    },
    [ProductKey.date_release]: () => formatDate(value),
    [ProductKey.date_revision]: () => formatDate(value),
  };

  const renderValue = renderValues[column] || renderValues.default;
  return renderValue();
};

export const Table = (props: IProps) => {
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
    const { data } = props;
    if (!data || data.length === 0) {
      return (
        <tr>
          <td colSpan={DASHBOARD_COLUMNS.length} className={styles.noValues}>
            ¡Vaya, parece que no se encontró nada! Por favor, inténtalo
            nuevamente o verifica tus criterios de búsqueda.
            {/* TODO: Add Icon */}
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
