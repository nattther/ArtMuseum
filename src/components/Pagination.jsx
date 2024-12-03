
import styles from "./Pagination.module.css"; 

/* eslint-disable react/prop-types */
const Pagination = ({
  currentPage,
  totalPages,
  onPreviousPage,
  onNextPage,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.Pagination}>
      <button
        onClick={onPreviousPage}
        disabled={currentPage === 1}
        className={styles["Pagination-button"]}
      >
        ⬅ Précédent
      </button>
      <div className={styles["Pagination-pages"]}>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`${styles["Pagination-page"]} ${
              currentPage === page ? styles.active : ""
            }`}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        onClick={onNextPage}
        disabled={currentPage === totalPages}
        className={styles["Pagination-button"]}
      >
        Suivant ➡
      </button>
    </div>
  );
};

export default Pagination;
