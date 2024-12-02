import styles from './PaintingDisplay.module.css';

function PaintingDisplay({ imageUrl, author, title }) {
  return (
    <div className={styles.ImageContenaire}>
      <img className={styles.Imagepaint} src={imageUrl} alt={title} />
      <div className={styles.InfoContenaire}>
        <p>{title}</p>
        <p>{author}</p>
      </div>
    </div>
  );
}

export default PaintingDisplay;
