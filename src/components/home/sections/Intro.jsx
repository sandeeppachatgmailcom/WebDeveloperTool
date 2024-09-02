import React, { useEffect, useLayoutEffect, useState } from 'react'
import UseColourReleaseHook from '../../../hooks/UseColourReleaseHook'
import imagebackGround from '../../../assets/banner_1.jpg'; 
function Intro() {
  const color = UseColourReleaseHook()
  const [image,setImage] = useState({})
  useLayoutEffect(()=>{
   setImage(color)
  },[color])
  return (
    <div className={`${image.backGroundColour} overflow-hidden rounded-sm  relative  items-center flex-col w-[100%] h-[100%] justify-center flex`}> 
      <img className="w-full h-full absolute  " src={imagebackGround} alt="image" />
      <div className={`flex justify-center items-center flex-col ${image.buttonColour} bg-opacity-10   w-full h-full absolute`}>
          <h6 className={`  ${image.textColour} text-8xl    `}>IntroSection </h6>
          <button className={`h-10 w-20 border   ${image.buttonColour} ${image.textColour} `}>
            Click Me
          </button>
      </div>
    </div>
  )
}

export default Intro
