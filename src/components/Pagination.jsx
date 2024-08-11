const Pagination = ({ currentPage, totalPages, paginate }) => {
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, startPage + 4);
  const pageNumbers = [];
  
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-6">
      {/* Previous Button */}
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 mx-1 text-white bg-blue-500 hover:bg-blue-700 rounded disabled:opacity-50"
      >
        &larr;
      </button>

      {/* Page Numbers */}
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`px-4 py-2 mx-1 ${
            currentPage === number ? "bg-blue-700 text-white" : "bg-gray-300 text-black"
          } hover:bg-blue-500 rounded`}
        >
          {number}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 mx-1 text-white bg-blue-500 hover:bg-blue-700 rounded disabled:opacity-50"
      >
        &rarr;
      </button>
    </div>
  );
};

export default Pagination;
