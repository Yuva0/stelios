import * as React from 'react';
import { PaginationProps } from './Pagination.types';
const Pagination: React.FC<PaginationProps> = ({ totalPages, selectedPage, totalDisplayedPages = 5, onChange }) => {
  const [currentPage, setCurrentPage] = React.useState(selectedPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onChange(page);
  };

  return (
    <div>
        {Array.from({length: totalPages}, (_, index) => index + 1).map((page) => (
            <button key={page} onClick={() => handlePageChange(page)}>
                {page}
            </button>
        ))}
    </div>
  )
};

export default Pagination;
