import "./App.css";
import PaintingDisplay from "./PaintingDisplay";
import data from "./infosMockAPI.json";

function App() {
  return (
    <div className="ImageContenaires">
      {data.artObjects.map((item, index) => {
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
  );
}


export default App;
