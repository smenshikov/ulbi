import React, {
  ChangeEvent, FC, InputHTMLAttributes, memo,
} from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export const Input: FC<InputProps> = memo(({
  className, value, onChange, type, ...otherProps
}) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={className}>
      <input type={type} value={value} onChange={onChangeHandler} {...otherProps} />
    </div>
  );
});
