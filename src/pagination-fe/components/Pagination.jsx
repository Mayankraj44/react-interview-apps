export default function Pagination({handlePageChange,currentPage,NO_OF_PAGES}) {
    return (
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
    )
}