import cx from "classnames";
import styles from "./index.module.scss";
import { RegisterOptions } from "react-hook-form";

interface IProps {
  onChange?;
  placeholder?: string;
  label?: string;
  errorMessage?: string;
  disabled?: boolean;
  register?;
  name?: string;
  customRules?: RegisterOptions;
  type?: string;
  className?;
  value?;
}

export const Input = ({
  onChange,
  placeholder,
  label,
  errorMessage,
  disabled,
  register,
  name,
  customRules,
  type = "text",
  className,
  value,
}: IProps) => {
  return (
    <div className={className}>
      {!!label && (
        <div
          className={cx(styles.label, {
            [styles.disabled]: disabled,
          })}
        >
          {label}
        </div>
      )}
      <input
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={cx(styles.input, {
          [styles.hasError]: !!errorMessage,
          [styles.disabled]: disabled,
        })}
        type={type}
        disabled={disabled}
        {...(register ? register(name, { ...customRules }) : {})}
      />
      {!!errorMessage && !disabled && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
    </div>
  );
};
