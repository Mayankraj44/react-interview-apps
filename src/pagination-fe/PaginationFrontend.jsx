import React, { useEffect, useState } from "react";
import useFetch from "../custom-hooks/useFetch";
import { PAGINTION_API_BASE_URL } from "../utils/const";
import ProductCard from "../common/ProductCard";
const FETCH_URL =
  PAGINTION_API_BASE_URL +
  "?limit=2000&select=id,title,description,price,thumbnail";
//Limit 2000 to mimic that all product data is get in 1 singel api call

const PAGE_LIMIT = 10;
function PaginationFrontend() {
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, loading, error } = useFetch(FETCH_URL);
  const NO_OF_PAGES = Math.ceil(data?.total / PAGE_LIMIT) || 0;

  useEffect(() => {
    if (data?.products) {
      const OFFSET = (currentPage - 1) * PAGE_LIMIT;
      setProductList(data?.products?.slice(OFFSET, OFFSET + PAGE_LIMIT));
    }
  }, [currentPage, data]);

  const handlePageChange = (pN) => {
    if (pN > 0 && pN <= NO_OF_PAGES) {
      setCurrentPage(pN);
    }
  };

  // console.log(productList);
  if (error) {
    return <h1>Error please refresh again</h1>;
  }
  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <div className="flex flex-wrap">
        {productList?.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <div className="flex justify-center gap-2 mb-10">
        <span
          onClick={() => handlePageChange(currentPage - 1)}
          className={`${currentPage === 1 && "cursor-not-allowed text-gray-700"} cursor-pointer`}
        >
          Prev
        </span>
        {[...Array(NO_OF_PAGES)]?.map((_, pN) => (
          <span
            className={`${pN + 1 == currentPage && "font-bold text-blue-300"} cursor-pointer`}
            onClick={() => handlePageChange(pN + 1)}
          >
            {pN + 1}
          </span>
        ))}
        <span
          onClick={() => handlePageChange(currentPage + 1)}
          className={`${currentPage === NO_OF_PAGES && "cursor-not-allowed text-gray-700"} cursor-pointer`}
        >
          Next
        </span>
      </div>
    </>
  );
}

export default PaginationFrontend;
