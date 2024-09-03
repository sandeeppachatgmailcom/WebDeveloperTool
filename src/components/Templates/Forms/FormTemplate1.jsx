import React, { useLayoutEffect, useState } from 'react';
import UseColourReleaseHook from '../../../hooks/UseColourReleaseHook';
import imagebackGround from '../../../assets/banner_1.jpg';

const FormTemplate1 = ({ textSize }) => {
  const color = UseColourReleaseHook();
  const [image, setImage] = useState({});

  useLayoutEffect(() => {
    setImage(color);
  }, [color]);

  return (
    <div
      className={`${image.backGroundColour} overflow-hidden rounded-sm relative flex items-center justify-center w-full h-full`}
    >
      <img className="w-full h-full object-cover absolute" src={"https://png.pngtree.com/thumb_back/fh260/background/20230715/pngtree-d-illustration-of-social-media-concept-holding-smartphone-with-media-marketing-image_3867865.jpg"} alt="image" />
      <div
        className={`flex justify-center items-center flex-col ${image.buttonColour} bg-opacity-10 w-full h-full absolute`}
      >
        <h6 className={`${image.textColour} ${textSize ? textSize : ''}`}>
          Form Section
        </h6>
        <button className={`h-10 w-20 border ${image.buttonColour} ${image.textColour}`}>
          Click Me
        </button>
      </div>
    </div>
  );
};

export default FormTemplate1;
