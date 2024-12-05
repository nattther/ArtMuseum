/* eslint-disable react/prop-types */
import styles from "./SearchBar.module.css";

function SearchBar({ searchQuery, onSearchChange, onSearch }) {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Rechercher des tableaux..."
        value={searchQuery}
        onChange={onSearchChange}
      />
      <button className={styles.searchButton} onClick={onSearch}>
        Rechercher
      </button>
    </div>
  );
}

export default SearchBar;
