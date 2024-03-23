import SimpleImageSlider from "react-simple-image-slider";
import image1 from "./assets/main_slide/bedroom.png"
import { useState, useEffect } from "react";
import "./Slider.css"
import Button from '@mui/material/Button';

const images = [
    {
      url: image1,
      caption: 'Services'
    },
    {
      url: image1,
      caption: 'Projects'
    },
    {
      url: image1,
      caption: 'Gallery'
    },
  ];
function Slider(){
    const [width, setWidth] = useState(100);
    const [height, setHeight] = useState(100);
    const [buttonText, setButtonText] = useState(images[0]["caption"])
    const buttonStyle = {
      position:"absolute",
      bottom: "6%",
      top: "87%",
      backgroundColor: "transparent",
      left: "40%",
      right: "40%",
      borderWidth: "10px",
      border: "solid white 1px",
      fontSize: "20px",
      color: "white",
      boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)"

    }
    useEffect(() => {
        const resizeObserver = new ResizeObserver((event) => {
            // Depending on the layout, you may need to swap inlineSize with blockSize
            // https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/contentBoxSize
            setWidth(event[0].contentBoxSize[0].inlineSize);
            setHeight(event[0].contentBoxSize[0].blockSize);
        });

        resizeObserver.observe(document.getElementById("home"));
    })

    const onStartSlide = (id , length) => {
        console.log("image" + id);
        setButtonText(images[id-1]['caption']);
    };
    
  return (
    <div>
      <SimpleImageSlider
        width={width}
        height={height}
        images={images}
        showBullets={true}
        showNavs={true}
        onStartSlide={onStartSlide}
      />
      <Button variant="outlined" className="transparent-button" sx={buttonStyle}>{buttonText}</Button>
      {/* <button className="transparent-button">{buttonText}</button> */}
    </div>
  );
}
export default Slider;