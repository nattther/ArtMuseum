// eslint-disable-next-line react/prop-types
const Pagination = ({ currentPage, totalPages, onPreviousPage, onNextPage }) => {
  return (
    <div className="Pagination">
      <button onClick={onPreviousPage} disabled={currentPage === 1}>
        Précédent
      </button>
      <span>
        Page {currentPage} sur {totalPages}
      </span>
      <button onClick={onNextPage} disabled={currentPage === totalPages}>
        Suivant
      </button>
    </div>
  );
};

export default Pagination;
