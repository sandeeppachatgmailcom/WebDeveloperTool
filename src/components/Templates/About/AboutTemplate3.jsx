import React, { useLayoutEffect, useState } from 'react';
import UseColourReleaseHook from '../../../hooks/UseColourReleaseHook';
import imagebackGround from '../../../assets/banner_1.jpg';

const AboutTemplate3 = ({ textSize }) => {
  const color = UseColourReleaseHook();
  const [image, setImage] = useState({});

  useLayoutEffect(() => {
    setImage(color);
  }, [color]);

  return (
    <div
      className={`${image.backGroundColour} overflow-hidden rounded-sm relative flex items-center justify-center w-full h-full`}
    >
      <img className="w-full h-full object-cover absolute" src={"https://gowelmart.com/wp-content/uploads/2022/07/about-us-concept-2021-08-31-16-59-05-utc-min-scaled.jpg"} alt="image" />
      <div
        className={`flex justify-center items-center flex-col ${image.buttonColour} bg-opacity-10 w-full h-full absolute`}
      >
        <h6 className={`${image.textColour} ${textSize ? textSize : ''}`}>
        About Section
        </h6>
        <button className={`h-10 w-20 border ${image.buttonColour} ${image.textColour}`}>
          Click Me
        </button>
      </div>
    </div>
  );
};

export default AboutTemplate3;
