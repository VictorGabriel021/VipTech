import React from 'react';
import ReactPaginate from 'react-paginate';
import { ReactComponent as ArrowImage } from 'core/assets/images/arrow.svg';
import './styles.scss';

type Props = {
    onChange: (item: number) => void;
    pageCount: number;
    activePage: number;
  }

const Pagination = ({ pageCount, activePage, onChange } : Props) => {

    return (
          <ReactPaginate
            previousLabel={<ArrowImage className="arrow-image" />}
            nextLabel={<ArrowImage />}
            breakLabel={'...'}
            pageCount={pageCount}
            forcePage={activePage}
            onPageChange={selectedItem => onChange(selectedItem.selected)}
            containerClassName={'paginationContainer'}
            activeClassName={'page-active'}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
          />
      );
};

export default Pagination;
