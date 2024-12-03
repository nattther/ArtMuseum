import { useState, useEffect } from "react";
import "./App.css";
import PaintingDisplay from "./PaintingDisplay";
import Pagination from "./pagination";

function App() {
  const itemsPerPage = 10;
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  const fetchData = async () => {
    setLoading(true);
    try {
      const apiKey = "pYwXfSZ3"
      const response = await fetch(
        `https://www.rijksmuseum.nl/api/en/collection?key=${apiKey}&ps=50`
      );
      const result = await response.json();
      setData(result.artObjects);
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToTop();
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      scrollToTop();
    }
  };

  return (
    <div className="App">
      {loading ? (
        <div>Chargement des données...</div>
      ) : (
        <>
          <div className="ImageContenaires">
            {currentItems.map((item, index) => {
              const orientation =
                item.webImage.width > item.webImage.height ? "paysage" : "portrait";
              return (
                <PaintingDisplay
                  key={index}
                  imageUrl={item.webImage.url}
                  author={item.principalOrFirstMaker}
                  title={item.title}
                  orientation={orientation}
                />
              );
            })}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPreviousPage={goToPreviousPage}
            onNextPage={goToNextPage}
          />
        </>
      )}
    </div>
  );
}

export default App;
