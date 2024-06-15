/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './CheckboxVendor.scss';

type Props = {
  title: string;
  checked: boolean;
  onChange: () => void;
};

export const CheckboxVendor: React.FC<Props> = ({
  title,
  checked,
  onChange,
}) => {
  const svg = checked ? (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 8.5L9 11.5L17 3.5"
        stroke="#036"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 9.5V15.5C17 16.0304 16.7893 16.5391 16.4142 16.9142C16.0391 17.2893 15.5304 17.5 15 17.5H3C2.46957 17.5 1.96086 17.2893 1.58579 16.9142C1.21071 16.5391 1 16.0304 1 15.5V3.5C1 2.96957 1.21071 2.46086 1.58579 2.08579C1.96086 1.71071 2.46957 1.5 3 1.5H12"
        stroke="#036"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 9.5C17 11.8431 17 15.5 17 15.5C17 16.0304 16.7893 16.5391 16.4142 16.9142C16.0391 17.2893 15.5304 17.5 15 17.5H3C2.46957 17.5 1.96086 17.2893 1.58579 16.9142C1.21071 16.5391 1 16.0304 1 15.5V3.5C1 2.96957 1.21071 2.46086 1.58579 2.08579C1.96086 1.71071 2.46957 1.5 3 1.5H15"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <label className="checkbox-vendor">
      <input
        className="checkbox-vendor__input"
        type="checkbox"
        onChange={onChange}
      />

      <div className="checkbox-vendor__content">
        {title}

        {svg}
      </div>
    </label>
  );
};
