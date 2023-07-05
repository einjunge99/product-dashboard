import cx from "classnames";
import styles from "./index.module.scss";

interface IProps {
  icon: JSX.Element;
  onClick?: () => void;
  disabled?: boolean;
  size?: string;
  ["data-testid"]?: string;
}

export const Icon = ({
  icon,
  disabled,
  onClick,
  "data-testid": testId = "icon",
  size = "16px",
}: IProps) => {
  const handleClick = () => {
    if (disabled || !onClick) {
      return;
    }
    onClick();
  };

  return (
    <div
      data-testid={testId}
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
