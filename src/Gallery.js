import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import  images from "./assets/GalleryImages";

export default function GalleryShow() {
    const slides = images.map(({ src, width, height }) => ({
    src: src,
    width,
    height,
    }));

  const [index, setIndex] = useState(-1);


  const handleClick = (index,item) => setIndex(index);

  return (
    <div style={{position:"relative"}}>
      <div style={{height:"20px"}}></div>
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
      />
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
        <div style={{height:"20px"}}></div>
    </div>
    
  );
}

