import styles from "./PaintingDisplay.module.css";

const PaintingDisplay = ({ imageUrl, author, title, orientation, onPaintingClick }) => {
  return (
    <div
      className={`${styles.paintingItem} ${styles[orientation]}`}
      onClick={onPaintingClick}
    >
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={title} className={styles.paintingImage} />
        <div className={styles.overlay}>
        <h2 className={styles.paintingTitle}>{title}</h2>
        <p className={styles.paintingAuthor}>{author}</p>
        </div>
      </div>
    </div>
  );
};

export default PaintingDisplay;
