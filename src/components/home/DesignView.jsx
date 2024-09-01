import { useSelector } from "react-redux"
import SelectionPanel from "./SelectionPanel"
import Intro from "./sections/Intro"
import UseRenderSection from "../../hooks/UseRenderSection"

 
const DesignView = ()=>{

    const menu = useSelector((state)=>state.sections.activeSections)
    const sectionRender = UseRenderSection()
      
    return(
        <div className="w-[100%] flex h-[100%]  ">
            <div className="w-3/4 h-[100%] overflow-scroll   bg-gray-700 bg-opacity-85">
               <div className="m-12 mb-0 border   overflow-scroll shadow-lg gap-4 flex flex-col justify-center items-center  ">
                   
                    {
                        Object.keys(menu).map((item,index)=> menu[item] == true ?<div key={index} className="relative flex w-[90%] rounded h-screen   text-white p-1"> 
                         <div className="absolute h-[100%] w-full">
                         {sectionRender(item) } 
                         </div> 
                         
                         </div>:''   ).sort()
                    }
               </div> 
            </div>
            <div className="w-1/4 h-[100%] border-s">
                <SelectionPanel/>
            </div>
        </div>
    )
}

export default DesignView