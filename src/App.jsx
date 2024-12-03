import './App.css';
import PaintingDisplay from './PaintingDisplay';
import data from './infosMockAPI.json';

function App() {
  const paintings = data.artObjects.map((item) => ({
    imageUrl: item.webImage.url,
    author: item.principalOrFirstMaker,
    title: item.title,
    orientation: item.width > item.heigth?  'paysage' : 'portrait'
  }));

  return (
    <div className="ImageContenaires">
      {paintings.map((painting, index) => (
          <PaintingDisplay
          key={index}
          imageUrl={painting.imageUrl}
          author={painting.author}
          title={painting.title}
          orientation={painting.orientation}
        />
      ))}
    </div>
  );
}

export default App;
