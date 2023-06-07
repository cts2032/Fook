import React, { useState } from "react";
import "./Paging.css";
import Pagination from "react-js-pagination";

const Page = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <Pagination
      activePage={page} //현재 페이지
      itemsCountPerPage={5} // 한 페이지당 보여줄 리스트 아이템의 개수
      totalItemsCount={12} // 총 아이템의 개수
      pageRangeDisplayed={5} // 보여줄 페이지의 범위
      prevPageText={"‹"} // 이전을 나타낼 텍스트
      nextPageText={"›"} // 다음을 나타낼 텍스트
      onChange={handlePageChange}
    />
  );
};

export default Page;
