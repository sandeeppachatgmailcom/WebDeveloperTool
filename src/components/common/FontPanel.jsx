import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFont } from '../../store/fontFamily'

function FontPanel() {
    const fonts = useSelector((state)=> state.font.fontLibrary)
    const dispatch = useDispatch()
    const [selectedIndex,setSelectedIndex] = useState(0)
  return (
    <div className='w-[100%] h-[100%] flex  flex-col   justify-center border-s gap-5 ps-1  overflow-scroll '>
        <div className='w-full flex   flex-col     '>
            <h1 className='text-xl m-10 font-semibold '> Choose a font pairing</h1>
            <span className='text-sm m-3 '>These custom pairings were curated by our designers. There are other font options you can explore later.</span>
        </div>
        <div className='w-[100%]  flex  flex-wrap '>
        {
            Object.keys(fonts).map((font,index)=><div onClick={()=>{dispatch(setFont(fonts[font]));console.log(fonts[font]);setSelectedIndex(index)}} className={`${index == selectedIndex ? 'border border-gray-800' :''} m-1 h-[70%] overflow-hidden  cursor-pointer shadow-md  w-[45%]   p-1 flex flex-wrap justify-center items-center `}>
                <h1 className={`${fonts[font].font} text-sm p-1 `}>{font.toUpperCase()}</h1>
            </div> )
        }
        </div>
        
    </div>
  )
}

export default FontPanel
