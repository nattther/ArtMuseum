import styles from './PaintingDisplay.module.css';

function PaintingDisplay() {
    const imageUrl = "https://lh3.googleusercontent.com/qEnlrp5MyHgLIVvrQR3HYtMBhQaLsxCmhBB15DCxX07l_rAvKqjKAXgCkgigYYxA2hGls9riG6Xfn_K_V5_GMfd_0bE=s0"; 
    const author = "Adriaen Coorte"
    return (
        <div className={styles.ImageContenaire}>
        <img className={styles.Imagepaint}
            src={imageUrl} 
        />
        <p>{author}</p>
        </div>
    );
}

export default PaintingDisplay;

