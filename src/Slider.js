import SimpleImageSlider from "react-simple-image-slider";
import { useState, useEffect } from "react";
import "./Slider.css"
const images = [
    {
      url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'Slide 1'
    },
    {
      url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
      caption: 'Slide 2'
    },
    {
      url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'Slide 3'
    },
  ];
function Slider(){
    const [width, setWidth] = useState(100);
    const [height, setHeight] = useState(100);
    const [buttonText, setButtonText] = useState(images[0]["caption"])
    useEffect(() => {
        const resizeObserver = new ResizeObserver((event) => {
            // Depending on the layout, you may need to swap inlineSize with blockSize
            // https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/contentBoxSize
            setWidth(event[0].contentBoxSize[0].inlineSize);
            setHeight(event[0].contentBoxSize[0].blockSize);
        });

        resizeObserver.observe(document.getElementById("one"));
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
      <button className="transparent-button">{buttonText}</button>
    </div>
  );
}
export default Slider;