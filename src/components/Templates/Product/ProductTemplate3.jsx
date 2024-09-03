import React, { useLayoutEffect, useState } from 'react';
import UseColourReleaseHook from '../../../hooks/UseColourReleaseHook';
import imagebackGround from '../../../assets/banner_1.jpg';
import { useSelector } from 'react-redux';

const ProductTemplate3 = ({ textSize }) => {
  const color = UseColourReleaseHook();
  const [image, setImage] = useState({});
  const introDetails = useSelector((state)=>state.sections.activeSections.products)
  useLayoutEffect(() => {
    setImage(color);
  }, [color]);

  return (
    <div
      className={`${image.backGroundColour} overflow-hidden rounded-sm relative flex items-center justify-center w-full h-full`}
    >
      <img className="w-full h-full object-cover absolute" src={"https://c0.wallpaperflare.com/preview/810/163/808/flatlay-makeup-beauty-cosmetics.jpg"} alt="image" />
      <div
        className={`flex justify-center items-center flex-col ${image.buttonColour} bg-opacity-10 w-full h-full absolute`}
      >
        <h6 className={`${image.textColour} ${textSize ? textSize : 'text-8xl'}`}>
          {introDetails.Heading}
        </h6>
        <button className={`h-10 w-20 border ${image.buttonColour} ${image.textColour}`}>
          Click Me
        </button>
      </div>
    </div>
  );
};

export default ProductTemplate3;
