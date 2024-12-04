/* eslint-disable react/prop-types */

import PaintingDisplay from "./PaintingDisplay";
import styles from "./PaintingList.module.css";

const PaintingList = ({ items }) => {
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
          />
        );
      })}
    </div>
  );
};

export default PaintingList;
