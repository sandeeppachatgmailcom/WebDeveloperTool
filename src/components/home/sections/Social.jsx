import React, { useEffect, useLayoutEffect, useState } from 'react'
import UseColourReleaseHook from '../../../hooks/UseColourReleaseHook'

function Social() {
  const color = UseColourReleaseHook()
  const [image,setImage] = useState({})
  useLayoutEffect(()=>{
   setImage(color)
  },[color])
  return (
    <div className={`${image.backGroundColour}   items-center flex-col w-[100%] h-[100%] justify-center flex`}> 
      <h6 className={`  ${image.textColour} text-8xl`}>Social </h6>
      <button className={`h-10 w-20 border ${image.buttonColour} ${image.textColour} `}>
        Click Me
      </button>
    </div>
  )
}

export default Social
