import React, {useEffect, useState} from "react";
import Carousel from "./Carousel/Carousel.jsx";
import Spinner from "./Spinner/Spinner.jsx";
import { fetchImages } from "./services/fetchImages.js";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const fetchedImages = await fetchImages();
      setImages(fetchedImages);
    };
    loadImages();
  }, []);

  return (
    <div>
      {images.length > 0 ? (
        <Carousel images={images}/>
      ) : (
        <Spinner/>
      )}
    </div>
  );
}

export default App