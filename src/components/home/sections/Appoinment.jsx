 
import React, { useEffect, useLayoutEffect, useState } from 'react'
import UseColourReleaseHook from '../../../hooks/UseColourReleaseHook'
import GetTemplates from '../../common/GetTemplate'
import { useSelector } from 'react-redux'


function Appoinment({item,menu}) {
  const designTemplate = useSelector((state)=>state.sections.activeSections.appoinment.templateId)
  const color = UseColourReleaseHook()
  const [image,setImage] = useState({})
  const templates = GetTemplates(designTemplate)
    

  return (
     <div className='w-full h-full flex flex-col'>
         {templates}
     </div>
  )
}

export default Appoinment