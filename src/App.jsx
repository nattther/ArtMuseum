import "./App.css";
import PaintingDisplay from "./PaintingDisplay";
import data from "./infosMockAPI.json";

function App() {
  return (
    <div className="ImageContenaires">
      {data.artObjects.map((item, index) => (
        <PaintingDisplay
          key={index}
          imageUrl={item.webImage.url}
          author={item.principalOrFirstMaker}
          title={item.title}
          orientation={item.width > item.height ? "paysage" : "portrait"}
        />
      ))}
    </div>
  );
}

export default App;
