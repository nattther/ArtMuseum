import styles from './PaintingDisplay.module.css';

function PaintingDisplay({ imageUrl, author, title, orientation }) {
  const containerClass =
    orientation === 'paysage'
      ? styles.LandscapeContainer
      : styles.PortraitContainer;

  return (
    <div className={`${styles.PaintingContainer} ${containerClass}`}>
      <img className={styles.ImagePaint} src={imageUrl} alt={title} />
      <div className={styles.InfoContainer}>
        <p>{title}</p>
        <p>{author}</p>
      </div>
    </div>
  );
}

export default PaintingDisplay;
