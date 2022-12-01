import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { Pagination } from "react-bootstrap";
import { Context } from "..";

const Pages = observer(() => {
  const { device } = useContext(Context);
  const pageCount = Math.ceil(device.totalCount / device.limit);
  const pages = [];
  for (let index = 0; index < pageCount; index++) {
    pages.push(index + 1);
  }
  return (
    <Pagination className="mt-5">
      {pages.map((page) => (
        <Pagination.Item
          onClick={() => device.setPage(page)}
          key={page}
          active={device.page === page}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
});

export default Pages;
