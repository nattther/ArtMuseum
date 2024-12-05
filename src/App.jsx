import { useState, useEffect } from "react";
import "./App.css";
import PaintingList from "./components/PaintingList";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import PaintingModal from "./components/PaintingModal";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("/.netlify/functions/usefetchdata");
      const result = await response.json();
      console.log("Données reçues :", result);
      setData(result);
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPainting, setSelectedPainting] = useState(null);

  const handlePaintingClick = (paintingData) => {
    setSelectedPainting(paintingData);
  };

  const itemsPerPage = 10;
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

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
          <h1 className="app-title">Galerie du Rijksmuseum</h1>

          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
          />

          <PaintingList
            items={currentItems}
            onPaintingClick={handlePaintingClick}
          />

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPreviousPage={onPreviousPage}
              onNextPage={onNextPage}
              onPageChange={onPageChange}
            />
          )}

          {selectedPainting && (
            <PaintingModal
              painting={selectedPainting}
              onClose={() => setSelectedPainting(null)}
            />
          )}
        </>
      )}
    </div>
  );
};

export default App;
