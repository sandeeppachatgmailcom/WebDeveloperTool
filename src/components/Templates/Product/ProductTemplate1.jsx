import React, { useLayoutEffect, useState } from 'react';
import UseColourReleaseHook from '../../../hooks/UseColourReleaseHook';
import imagebackGround from '../../../assets/banner_1.jpg';
import { useSelector } from 'react-redux';

const ProductTemplate1 = ({ textSize }) => {
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
      <img className="w-full h-full object-cover absolute" src={"https://cdn.pixabay.com/photo/2020/04/19/01/15/perfume-5061479_1280.jpg"} alt="image" />
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

export default ProductTemplate1;
