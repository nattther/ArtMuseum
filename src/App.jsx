import { useState } from "react";
import "./App.css";
import useFetchData from "./hooks/useFetchData";
import PaintingList from "./components/PaintingList";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";

function App() {
  const itemsPerPage = 5;
  const { data, loading } = useFetchData();

  
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

 
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );


  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToTop();
    }
  };

  const onNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      scrollToTop();
    }
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
    scrollToTop();
  };


  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); 
  };

  return (
    <div className="App">
      {loading ? (
        <div>Chargement des données...</div>
      ) : (
        <>

          <SearchBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />

          <PaintingList items={currentItems} />

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPreviousPage={onPreviousPage}
              onNextPage={onNextPage}
              onPageChange={onPageChange}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
