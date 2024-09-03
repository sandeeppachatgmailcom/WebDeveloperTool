import React, { useEffect, useLayoutEffect, useState } from 'react'
import UseColourReleaseHook from '../../../hooks/UseColourReleaseHook'
import imagebackGround from '../../../assets/banner_1.jpg'; 
import { useSelector } from 'react-redux';
function IntroTemplate3({item,menu}) {
  const color = UseColourReleaseHook()
  const [image,setImage] = useState({})
  const introDetails = useSelector((state)=>state.sections.activeSections.intro)
  useLayoutEffect(()=>{
   setImage(color)
  },[color])
  return (
    <div className={`${image.backGroundColour} overflow-hidden rounded-sm  relative  items-center flex-col w-[100%] h-[100%] justify-center flex`}> 
      <img className="w-full h-full absolute  " src={"https://www.pngkit.com/png/detail/762-7625596_curv-footer-green-footer-design-png.png"} alt="image" />
      <div className={`flex justify-center items-center flex-col ${image.buttonColour} bg-opacity-10   w-full h-full absolute`}>
          <h6 className={`  ${image.textColour} text-8xl    `}>{introDetails.Main} </h6>
          <button className={`h-10 w-20 border   ${image.buttonColour} ${image.textColour} `}>
            Click Me
          </button>
      </div>
    </div>
  )
}

export default IntroTemplate3
