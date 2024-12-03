import { useState } from "react";
import "./App.css";
import PaintingDisplay from "./PaintingDisplay";
import data from "./infosMockAPI.json";

function App() {

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.artObjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.artObjects.slice(startIndex, startIndex + itemsPerPage);
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
      <div className="ImageContenaires">
        {currentItems.map((item, index) => {
          const orientation = item.webImage.width > item.webImage.height ? "paysage" : "portrait";
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


      <div className="Pagination">
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
           Précédent
        </button>
        <span>
          Page {currentPage} sur {totalPages}
        </span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Suivant -
        </button>
      </div>
    </div>
  );
}

export default App;
