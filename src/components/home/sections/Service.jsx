import React, { useEffect, useLayoutEffect, useState } from 'react'
import UseColourReleaseHook from '../../../hooks/UseColourReleaseHook'
import GetTemplates from '../../common/GetTemplate'
import { useSelector } from 'react-redux'


function Service({item,menu}) {
  const designTemplate = useSelector((state)=>state.sections.activeSections.services.templateId)
  const color = UseColourReleaseHook()
  const [image,setImage] = useState({})
  const templates = GetTemplates(designTemplate)
   
  useLayoutEffect(()=>{
   setImage(color)
  },[color])
  useEffect(()=>{
    console.log(item,templates)
    
  },[])

  return (
     <div className='w-full h-full flex flex-col'>
         {templates}
     </div>
  )
}

export default Service