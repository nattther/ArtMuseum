/* eslint-disable react/prop-types */
import styles from "./PaintingModal.module.css";

const PaintingModal = ({ painting, onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <span className={styles.closeButton} onClick={onClose}>
          &times;
        </span>
        <h2>{painting.title}</h2>
        <p>{painting.longTitle}</p>
        <img src={painting.webImage.url} alt={painting.title} className={styles.imgModal} />
        <p>Auteur : {painting.principalOrFirstMaker}</p>
      </div>
    </div>
  );
};

export default PaintingModal;
