import React from 'react';
import './Pagination.scss';
import classNames from 'classnames';

type Props = {
  total: number;
  perPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export const Pagination: React.FC<Props> = ({
  total,
  perPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(total / perPage);
  const links = [];

  function prevLinkHandler() {
    if (currentPage === 1) {
      return;
    }

    onPageChange(currentPage - 1);
  }

  function nextLinkHandler() {
    if (currentPage === totalPages) {
      return;
    }

    onPageChange(currentPage + 1);
  }

  for (let i = 1; i <= totalPages; i += 1) {
    links.push(
      <li className="pagination__item" key={i}>
        <button
          className={classNames('pagination__link', {
            'pagination__link--active': currentPage === i,
          })}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      </li>,
    );
  }

  return (
    <div
      className={classNames('pagination', {
        'pagination--hidden': totalPages === 1,
      })}
    >
      <button
        className="pagination__button"
        onClick={prevLinkHandler}
        disabled={currentPage === 1}
      >
        &lt; Попередня
      </button>
      <ol className="pagination__list">{links}</ol>

      <button
        className="pagination__button"
        onClick={nextLinkHandler}
        disabled={currentPage === totalPages}
      >
        Наступна &gt;
      </button>
    </div>
  );
};
