import { AiOutlineMore } from "react-icons/ai";
import { Icon } from "../../common/icon";
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
      <Icon
        icon={<AiOutlineMore />}
        onClick={() => handleMenuClick(productId)}
      />
      {showMenu && (
        <div className={styles.popupMenu}>
          <div onClick={() => handleEdit(productId)}>Editar</div>
          <div onClick={() => handleDelete(productId)}>Eliminar</div>
        </div>
      )}
    </div>
  );
};
