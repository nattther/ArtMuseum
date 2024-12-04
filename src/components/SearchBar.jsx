/* eslint-disable react/prop-types */

import styles from "./SearchBar.module.css";

function SearchBar({ searchQuery, onSearchChange }) {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Rechercher des tableaux..."
        value={searchQuery}
        onChange={onSearchChange}
      />
    </div>
  );
}

export default SearchBar;
