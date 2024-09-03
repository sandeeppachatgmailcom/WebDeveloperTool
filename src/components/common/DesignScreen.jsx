import { useDispatch, useSelector } from "react-redux"
import UseRenderSection from "../../hooks/UseRenderSection"
import { HiMiniSquaresPlus } from "react-icons/hi2";
import { useEffect, useState } from "react";
import GetTemplates from "./GetTemplate";
import { editSections } from "../../store/section";

const DesignScreen = ()=>{
    const menu = useSelector((state)=>state.sections.activeSections)
    const menuList = useSelector((state)=>state.sections.templateSlice)
    const [selectIndex,setSeletedIndex] = useState(0)
    const [viewDropDown,setViewDropDown] = useState(false)
    const sectionRender = UseRenderSection()
    const font = useSelector((state)=>state.font.font)
    const dispatch = useDispatch()

    const handleLayout = (templates,mymenu)=>{
        console.log(templates,mymenu,'templates')
        const tempMenu = {
            ...menu,
            [mymenu]:{
                ...menu[mymenu],
                templateId:templates
            }
        }
        dispatch(editSections(tempMenu))
    }



    return(
        <div onScroll={()=>setViewDropDown(false)} className={`w-[80%] h-[80%] overflow-scroll ${font.font}`}>
        <div className="  mb-0 w-full shadow-lg gap-4 flex flex-col justify-center items-center  ">
             {
                 Object.keys(menu).map((item,index) => menu[item].status == true ?<div key={index}  className="relative flex w-[90%] rounded h-screen overflow-hidden shadow-lg   text-white p-1">{item.toUpperCase()}
                  <div className="absolute h-[100%] w-full">
                        {sectionRender(item,menu)} 
                  </div> 
                  { viewDropDown && selectIndex == index? <div className="absolute h-80 w-64 rounded flex p-2 justify-center bottom-16 end-4 bg-gray-400 bg-opacity-30 "> 
                        {
                            Object.keys(menuList).map((tempMenu,menuIndex)=>  {return tempMenu==item  ?  <div key={menuIndex} className="flex-wrap w-full   rounded  gap-2 cursor-pointer justify-start   flex overflow-hidden" >
                                {
                                    menuList[tempMenu].map((templates)=><div onClick={()=>handleLayout(templates,tempMenu)} className="    w-[45%] h-20"> {GetTemplates(templates)}</div> )
                                }
                            </div>:''} ) 
                        }
                  </div>:'' }
                  <div onClick={()=>{setViewDropDown(!viewDropDown);setSeletedIndex(index) }} className="cursor-pointer absolute h-10 w-56 items-center gap-4 rounded p-1 bottom-3 end-4 text-gray-600 flex justify-start  bg-gray-200 "> 
                <HiMiniSquaresPlus className="h-10 " />
                <h1> CHANGE LAYOUT </h1>
                  </div>
                  </div>:'').sort()
             }
            </div> 
        </div>
    )
}

export default DesignScreen