import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from '../../hooks/pagination';

const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    if(currentPage == lastPage) {
        return;
    }
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    if(currentPage == 1){
        return;
    }
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  let dot_key = (Math.floor( Math.random() * lastPage ) + 1);

  return (
      <nav aria-label="...">
        <ul className={classnames('pagination justify-content-end mb-0', { [className]: className })} >
           {/* Left navigation arrow */}
          <li className={classnames('page-item', { disabled: currentPage === 1 })} onClick={onPrevious} key={`l${currentPage}`}>
            <div className="page-link"  tabIndex="-1">
              <i className="fas fa-angle-left"></i>
              <span className="sr-only">Previous</span>
            </div>
          </li>
          {
           paginationRange.map(pageNumber => {
             
            // If the pageItem is a DOT, render the DOTS unicode character
            if (pageNumber === DOTS) {
              dot_key += Math.floor( Math.random() * lastPage ) + 1;
              return <li className="page-item dots" key={`d${dot_key}`}>&#8230;</li>;
            }
            
            // Render our Page Pills
            return (
              <li className={classnames('page-item', { active: pageNumber === currentPage })} onClick={() => onPageChange(pageNumber)}  key={`p${pageNumber}`}>
                  <div className="page-link" >{pageNumber}</div>
              </li>
            );
          })}
          {/*  Right Navigation arrow */}
          <li className={classnames('page-item', { disabled: currentPage === lastPage })} onClick={onNext} key={`r${currentPage}`}>
            <div className="page-link">
              <i className="fas fa-angle-right"></i>
              <span className="sr-only">Next</span>
            </div>
          </li>
        </ul>
      </nav>
  );
};

export default Pagination;

