/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-len */
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import './Dropdown.scss';

type Props = {
  options: string[];
  selectedOption: string;
  onSelect: (value: any) => void;
  className?: string;
  contentClassName?: string;
  hasError?: boolean;
};

export const Dropdown: React.FC<Props> = ({
  options,
  selectedOption,
  onSelect,
  className = '',
  contentClassName = '',
  hasError,
}) => {
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={classNames('dropdown', {
        'dropdown--active': isActive,
        'dropdown--error': hasError,
      })}
      ref={dropdownRef}
    >
      <button
        type="button"
        onClick={() => {
          setIsActive(!isActive);
        }}
        className={classNames('dropdown__btn', {
          [className]: className,
        })}
      >
        <span className="dropdown__btn-text">{selectedOption}</span>

        <svg
          className={classNames('dropdown__svg', {
            'dropdown__svg--active': isActive,
          })}
          width="14"
          height="9"
          viewBox="0 0 14 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1.5L7 7.5L13 1.5"
            stroke="#036"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <ul
        className={classNames('dropdown__content', {
          [contentClassName]: contentClassName,
        })}
        style={{ display: isActive ? 'flex' : 'none' }}
      >
        {options.map(item => (
          <button
            key={item}
            type="button"
            className="dropdown__item"
            onClick={() => {
              setIsActive(false);
              onSelect(item);
            }}
          >
            {item}
          </button>
        ))}
      </ul>
    </div>
  );
};
