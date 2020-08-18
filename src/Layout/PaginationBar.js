import React, { useEffect, useState } from 'react';
import { Pagination, Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function PaginationBar({ changePage, paginationData }) {
  const [paginate, setPaginate] = useState({
    pagesData: {},
    loading: true,
  });
  useEffect(() => {
    setPaginate({
      pagesData: paginationData,
      loading: false,
    });
  }, [paginationData]);

  var items = [];

  for (let number = 1; number <= paginate.pagesData.totalPages; number++) {
    items.push(
      <Button key={number} variant="secondary" onClick={() => changePage(number)} active={number === paginate.pagesData.page} >
        {number}
      </Button>
    );
  }

  return (

   !paginate.loading && <div>
      <ButtonGroup aria-label="First group">
        <Button variant="secondary" onClick={() => changePage((paginate.pagesData.page - 1))} disabled={!paginate.pagesData.hasPrevPage}>
          {'< Previous'}
        </Button>
        {items.map((item) => item)}
        <Button variant="secondary" onClick={() => changePage(paginate.pagesData.page + 1)} disabled={!paginate.pagesData.hasNextPage}>
          {'Next >'}
        </Button>
      </ButtonGroup>
    </div>
  );
}
