import cx from "classnames";
import { useState } from "react";
import styles from "./index.module.scss";
import { Icon } from "../icon";
import { AiOutlineCaretDown } from "react-icons/ai";

interface IProps {
  options: number[];
  itemsPerPage: number;
  handleItemsPerPageChange: (items: number) => void;
}

export const Dropdown = ({
  options,
  itemsPerPage,
  handleItemsPerPageChange,
}: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: number) => {
    handleItemsPerPageChange(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <div
        className={cx(styles.dropdown, {
          [styles.open]: isOpen,
        })}
      >
        <div className={styles.selection} onClick={toggleDropdown}>
          {itemsPerPage}
          <Icon icon={<AiOutlineCaretDown />} size="10px" />
        </div>
        {isOpen && (
          <ul className={styles.options}>
            {options.map((option, index) => (
              <li
                key={index}
                className={styles.option}
                onClick={() => selectOption(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
