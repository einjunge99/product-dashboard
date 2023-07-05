import cx from "classnames";
import styles from "./index.module.scss";

interface IProps {
  icon: JSX.Element;
  onClick?: () => void;
  disabled?: boolean;
  size?: string;
}

export const Icon = ({ icon, disabled, onClick, size = "16px" }: IProps) => {
  const handleClick = () => {
    if (disabled || !onClick) {
      return;
    }
    onClick();
  };

  return (
    <div
      data-testid="icon"
      onClick={handleClick}
      className={cx(styles.icon, {
        [styles.disabled]: disabled,
      })}
      style={{
        fontSize: size,
      }}
    >
      {icon}
    </div>
  );
};
