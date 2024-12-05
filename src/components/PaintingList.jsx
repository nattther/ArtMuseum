/* eslint-disable react/prop-types */

import PaintingDisplay from "./PaintingDisplay";
import styles from "./PaintingList.module.css";

const PaintingList = ({ items, onPaintingClick }) => {
  return (
    <div className={styles.imageContainer}>
      {items.map((item, index) => {
        const orientation =
          item.webImage.width > item.webImage.height ? "paysage" : "portrait";
        return (
          <PaintingDisplay
            key={index}
            imageUrl={item.webImage.url}
            author={item.principalOrFirstMaker}
            title={item.title}
            orientation={orientation}
            onPaintingClick={() => onPaintingClick(item)}
          />
        );
      })}
    </div>
  );
};

export default PaintingList;
