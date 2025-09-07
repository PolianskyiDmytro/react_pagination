import React from 'react';

interface Props {
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  pagesArray: number[];
  items: string[];
}

export const Pagination: React.FC<Props> = ({
  itemsPerPage,
  currentPage,
  setCurrentPage,
  totalPages,
  pagesArray,
  items,
}) => {
  return (
    <>
      <ul className="pagination">
        <li className={`page-item${currentPage === 1 ? ' disabled' : ''}`}>
          <a
            data-cy="prevLink"
            className="page-link"
            href="#prev"
            aria-disabled={currentPage === 1 ? 'true' : 'false'}
            onClick={() =>
              currentPage !== 1 ? setCurrentPage(currentPage - 1) : null
            }
          >
            «
          </a>
        </li>
        {pagesArray.map((page: number) => (
          <li
            className={`page-item ${page === currentPage ? 'active' : ''}`}
            key={page}
          >
            <a
              data-cy="pageLink"
              className="page-link"
              href={`#${page}`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </a>
          </li>
        ))}
        <li
          className={`page-item ${currentPage === totalPages ? ' disabled' : ''}`}
        >
          <a
            data-cy="nextLink"
            className="page-link"
            href="#next"
            aria-disabled={currentPage === totalPages ? 'true' : 'false'}
            onClick={() =>
              currentPage !== totalPages
                ? setCurrentPage(currentPage + 1)
                : null
            }
          >
            »
          </a>
        </li>
      </ul>
      <ul>
        {items
          .slice(
            (currentPage - 1) * itemsPerPage,
            (currentPage - 1) * itemsPerPage + itemsPerPage,
          )
          .map((item: string) => (
            <li data-cy="item" key={item}>
              {item}
            </li>
          ))}
      </ul>
    </>
  );
};
