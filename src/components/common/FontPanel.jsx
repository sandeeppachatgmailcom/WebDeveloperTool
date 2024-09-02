import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFont } from '../../store/fontFamily'

function FontPanel() {
    const fonts = useSelector((state)=> state.font.fontLibrary)
    const dispatch = useDispatch()
    const [selectedIndex,setSelectedIndex] = useState(0)
  return (
    <div className='w-[100%] h-[100%] flex flex-wrap border  overflow-scroll '>
        {
            Object.keys(fonts).map((font,index)=><div onClick={()=>{dispatch(setFont(fonts[font]));console.log(fonts[font]);setSelectedIndex(index)}} className={`${index == selectedIndex ? 'border border-gray-800' :''} m-1 rounded-xl cursor-pointer shadow-md  w-[45%] h-[30%]   p-1 flex justify-center items-center `}>
                <h1 className={`${fonts[font].font} text-xl`}>{font}</h1>
            </div> )
        }
    </div>
  )
}

export default FontPanel
