import React, {useEffect, useState} from "react";
import Indicators from "../Indicators/Indicators.jsx";
import styles from "./Carousel.module.css";

function Carousel ({images}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const interval = 4000;

    const goToNextSlide = () => {
        setCurrentIndex((previousIndex) =>
            previousIndex === images.length - 1 ? 0 : previousIndex + 1
        );
    };

    const goToPreviousSlide = () => {
        setCurrentIndex((previousIndex) =>
            previousIndex === 0 ? images.length - 1 : previousIndex - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const autoplayInterval = setInterval(goToNextSlide, interval);
        return () => {
            clearInterval(autoplayInterval);
        };
    }, [interval]);

    return (
        <div className={styles.carousel}>
            <button onClick={goToPreviousSlide} className={`${styles.button} ${styles.previousButton}`}>
                ◀︎
            </button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className={styles.img}/>
            <button onClick={goToNextSlide} className={`${styles.button} ${styles.nextButton}`}>
                ▶︎
            </button>
            <Indicators images={images} currentIndex={currentIndex} goToSlide={goToSlide}/>
        </div>
    );
}

export default Carousel;