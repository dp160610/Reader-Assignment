import React from "react";
import "./pagination.css";

const Pagination = ({ listPerPage, totalList, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalList / listPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination req">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
