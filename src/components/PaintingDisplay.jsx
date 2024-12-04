
import styles from "./PaintingDisplay.module.css";

const PaintingDisplay = ({ imageUrl, author, title, orientation }) => {
  return (
    <div className={`${styles.paintingItem} ${styles[orientation]}`}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={title} className={styles.paintingImage} />
      </div>
      <div className={styles.paintingContent}>
        <h2 className={styles.paintingTitle}>{title}</h2>
        <p className={styles.paintingAuthor}>{author}</p>
      </div>
    </div>
  );
};

export default PaintingDisplay;
