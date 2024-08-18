const Pagination = ({ currentPage, totalPages, paginate }) => {
  const pageNumbers = [];
  let startPage, endPage;

  if (totalPages <= 5) {
    startPage = 1;
    endPage = totalPages;
  } else if (currentPage <= 3) {
    startPage = 1;
    endPage = 5;
  } else if (currentPage + 2 >= totalPages) {
    startPage = totalPages - 4;
    endPage = totalPages;
  } else {
    startPage = currentPage - 2;
    endPage = currentPage + 2;
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center items-center mt-6">
      <div className="inline-flex rounded-md shadow-sm" role="group">
        {/* Previous Button */}
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-gray-900"
        >
          &larr;
        </button>

        {/* Page Numbers */}
        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`px-3 py-2 text-sm font-medium ${
              currentPage === number 
                ? "text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 focus:z-10" 
                : "text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
            }`}
          >
            {number}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-gray-900"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default Pagination;