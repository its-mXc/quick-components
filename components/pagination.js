import React from 'react';

const Pagination = ({pages, prefix}) => {
  return ( 
    <div>
      <ul class="pagination">
        <li class="page-item disabled">
          <a class="page-link" href="#">&laquo;</a>
        </li>
        {Array.from(Array(Number(pages))).map((index, value) => {
          return (
            <li class="page-item active">
            <a class="page-link" href={`${prefix}/${index+1}`}>{index+1}</a>
          </li>
          )
        })}
        <li class="page-item">
          <a class="page-link" href="#">&raquo;</a>
        </li>
      </ul>
    </div>
    )
}

export default Pagination