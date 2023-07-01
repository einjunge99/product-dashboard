import cx from "classnames";
import styles from "./index.module.scss";

enum ClassNamesByType {
  secondary = "secondary",
  primary = "primary",
}

interface IProps {
  disabled?: boolean;
  variant?: keyof typeof ClassNamesByType;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export const Button = ({
  disabled,
  variant,
  children,
  type,
  onClick,
}: IProps) => {
  return (
    <button
      disabled={disabled}
      className={cx(
        styles.button,
        styles[ClassNamesByType[variant ?? "primary"]]
      )}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
