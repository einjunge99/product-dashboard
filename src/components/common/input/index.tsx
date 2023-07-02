import cx from "classnames";
import styles from "./index.module.scss";
import { RegisterOptions } from "react-hook-form";
import { ChangeEvent } from "react";

interface IProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
  errorMessage?: string;
  disabled?: boolean;
  name?: string;
  customRules?: RegisterOptions;
  type?: string;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  value?;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  register?;
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
        <label
          htmlFor={name}
          className={cx(styles.label, {
            [styles.disabled]: disabled,
          })}
        >
          {label}
        </label>
      )}
      <input
        id={name}
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
