import React, { useLayoutEffect, useState } from 'react'
import useColourReleaseHook from '../../../hooks/UseColourReleaseHook'

function Service() {
  const color = useColourReleaseHook()
  const [image,setImage] = useState({})
  useLayoutEffect(()=>{
   setImage(color)
  },[color])
  return (
    <div className={`${image.backGroundColour}   items-center flex-col w-[100%] h-screen justify-center flex`}> 
      <h6 className={`  ${image.textColour} text-8xl`}> Service </h6>
      <button className={`h-10 w-20 border ${image.buttonColour} ${image.textColour} `}>
        Click Me
      </button>
    </div>
  )
}

export default Service