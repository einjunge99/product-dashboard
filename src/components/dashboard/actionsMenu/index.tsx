import styles from "./index.module.scss";

interface IProps {
  handleMenuClick: (productId: string) => void;
  handleEdit: (productId: string) => void;
  handleDelete: (productId: string) => void;
  showMenu: boolean;
  productId: string;
}

export const ActionsMenu = ({
  handleMenuClick,
  handleDelete,
  handleEdit,
  showMenu,
  productId,
}: IProps) => {
  return (
    <div className={styles.actions}>
      <button
        className={styles.menuButton}
        onClick={() => handleMenuClick(productId)}
      >
        ...
      </button>
      {showMenu && (
        <div className={styles.popupMenu}>
          <div onClick={() => handleEdit(productId)}>Editar</div>
          <div onClick={() => handleDelete(productId)}>Eliminar</div>
        </div>
      )}
    </div>
  );
};
