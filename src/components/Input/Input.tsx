import classNames from 'classnames';
import './Input.scss';

type Props = {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  hasError: boolean;
  type?: string;
};

export const Input: React.FC<Props> = ({
  name,
  value,
  onChange,
  hasError,
  placeholder = '',
  type = 'text',
}) => {
  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      className={classNames('input', {
        'input--error': hasError,
      })}
      placeholder={placeholder}
    />
  );
};
