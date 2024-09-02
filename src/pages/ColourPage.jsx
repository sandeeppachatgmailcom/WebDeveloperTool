import { useSelector } from "react-redux"
import ColorController from "../components/Colors/ColorController"
import UseRenderSection from "../hooks/UseRenderSection"

const ColourPage = ()=>{
    const menu = useSelector((state)=>state.sections.activeSections)
    const sectionRender = UseRenderSection()
    
    return (
        <div className=" flex h-[100%] w-[100%]  ">
             <div className="w-full h-[100%] overflow-scroll   bg-gray-800 bg-opacity-80">
               <div className="  mb-0 border   w-full shadow-lg gap-4 flex flex-col justify-center items-center  ">
                  
                    {
                        Object.keys(menu).map((item,index)=> menu[item] == true ?<div key={index} className="relative flex w-[90%] rounded h-screen   text-white p-1">{item.toUpperCase()}
                         <div className="absolute h-[100%] w-full">
                         {sectionRender(item) } 
                         </div> 
                         
                         </div>:''   ).sort()
                    }
               </div> 
            </div>
            <div className="flex w-1/4 ">
                <ColorController/>
            </div>
        </div>
    )
}

export default ColourPage