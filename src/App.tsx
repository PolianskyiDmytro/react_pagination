import React, { useState } from 'react';
import './App.css';
import { getNumbers } from './utils';
import { Pagination } from './components/Pagination';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const items = getNumbers(1, 42).map(n => `Item ${n}`);

enum ItemsPerPage {
  Three = 3,
  Five = 5,
  Ten = 10,
  Twenty = 20,
}

export const App: React.FC = () => {
  const [itemsPerPage, setItemsPerPage] = useState<ItemsPerPage>(
    ItemsPerPage.Five,
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalItems = 42;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pagesArray = getNumbers(1, totalPages);

  return (
    <div className="container">
      <h1>Items with Pagination</h1>

      <p className="lead" data-cy="info">
        Page {currentPage} (items {1 + (currentPage - 1) * itemsPerPage} -{' '}
        {currentPage !== totalPages
          ? itemsPerPage + (currentPage - 1) * itemsPerPage
          : 42}{' '}
        of 42)
      </p>

      <div className="form-group row">
        <div className="col-3 col-sm-2 col-xl-1">
          <select
            data-cy="perPageSelector"
            id="perPageSelector"
            className="form-control"
            onChange={e => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            <option value="3">3</option>
            <option value="5" selected>
              5
            </option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>

        <label htmlFor="perPageSelector" className="col-form-label col">
          items per page
        </label>
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        pagesArray={pagesArray}
        items={items}
      />
    </div>
  );
};

export default App;
