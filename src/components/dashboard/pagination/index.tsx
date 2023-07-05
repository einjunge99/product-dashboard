import { Dropdown } from "../../common/dropdown";
import { Icon } from "../../common/icon";
import styles from "./index.module.scss";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

interface IProps {
  currentPage: number;
  handlePageChange: (page: number) => void;
  totalPages: number;
  options: number[];
  itemsPerPage: number;
  handleItemsPerPageChange: (items: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  handlePageChange,
  ...rest
}: IProps) => {
  return (
    <div className={styles.content}>
      <Icon
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        icon={<AiOutlineLeft />}
        data-testid="previous"
      />
      <Dropdown {...rest} />
      <Icon
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        icon={<AiOutlineRight />}
        data-testid="next"
      />
    </div>
  );
};
