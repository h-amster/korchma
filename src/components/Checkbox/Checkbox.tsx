/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from 'classnames';
import './Checkbox.scss';

type Props = {
  title: string;
  isHidden?: boolean;
  checked: boolean;
  onChange: () => void;
};

export const Checkbox: React.FC<Props> = ({
  title,
  isHidden = false,
  checked,
  onChange,
}) => {
  const isCheckboxHidden = isHidden && !checked;

  return (
    <label
      className={classNames('checkbox', {
        'checkbox--hidden': isCheckboxHidden,
      })}
    >
      <input
        className="checkbox__input"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />

      <div className="checkbox__content">{title}</div>
    </label>
  );
};
