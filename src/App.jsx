
import { useState } from "react";
import "./App.css";
import useFetchData from "./hooks/useFetchData";
import PaintingList from "./components/PaintingList";
import Pagination from "./components/Pagination";

function App() {
  const itemsPerPage = 5;
  const { data, loading } = useFetchData();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

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

  return (
    <div className="App">
      {loading ? (
        <div>Chargement des données...</div>
      ) : (
        <>
          <PaintingList items={currentItems} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPreviousPage={onPreviousPage}
            onNextPage={onNextPage}
            onPageChange={onPageChange}
          />
        </>
      )}
    </div>
  );
}

export default App;
