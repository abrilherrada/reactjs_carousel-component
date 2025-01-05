import styles from "./Indicators.module.css";

function Indicators ({images, currentIndex, goToSlide}) {

    return (
        <div className={styles.indicators}>
            {images.map((_, index) => (
                <span 
                    key={index} 
                    className={`${styles.indicator} ${index === currentIndex ? styles.active : ""}`}
                    onClick={() => goToSlide(index)}
                />
            ))}
        </div>
    )
}

export default Indicators;