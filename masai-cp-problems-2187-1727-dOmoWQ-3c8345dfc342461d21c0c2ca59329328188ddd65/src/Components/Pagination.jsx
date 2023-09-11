import React from "react";
import './Pagination.css'
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination_wrapper">
      {pages.map((page) => (
        <button
          key={page}
          className={`page_button ${currentPage === page ? "active" : ""}`}
          onClick={() => onPageChange(page)}
          disabled={currentPage === page}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
