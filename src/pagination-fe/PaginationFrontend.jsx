import React, { useState } from "react";
import useFetch from "../custom-hooks/useFetch";
import { PAGINATION_FE_BASE_URL } from "../utils/const";
import ProductCard from "../common/ProductCard";
import PageLimitDropDown from "./components/PageLimitDropDown";
import Pagination from "./components/Pagination";

function PaginationFrontend() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageLimit, setCurrentPageLimit] = useState(10)
  const { data, loading, error } = useFetch(PAGINATION_FE_BASE_URL);
  const NO_OF_PAGES = Math.ceil(data?.total / currentPageLimit) || 0;

  const start=(currentPage - 1) * currentPageLimit;
  const end=start+currentPageLimit


  const handlePageChange = (pN) => {
    if (pN > 0 && pN <= NO_OF_PAGES) {
      setCurrentPage(pN);
    }
  };

  if (error) {
    return <h1>Error please refresh again</h1>;
  }
  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <PageLimitDropDown currentPageLimit={currentPageLimit} changeCurrentPageLimit={setCurrentPageLimit} />
      <div className="flex flex-wrap">
        {data?.products?.length && data?.products?.slice(start,end)?.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <Pagination handlePageChange={handlePageChange} currentPage={currentPage} NO_OF_PAGES={NO_OF_PAGES} />
    </>
  );
}

export default PaginationFrontend;
