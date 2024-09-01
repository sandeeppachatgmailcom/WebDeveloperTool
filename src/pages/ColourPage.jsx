import { useSelector } from "react-redux"
import ColorController from "../components/Colors/ColorController"
import UseRenderSection from "../hooks/UseRenderSection"

const ColourPage = ()=>{
    const menu = useSelector((state)=>state.sections.activeSections)
    const sectionRender = UseRenderSection()
    
    return (
        <div className=" flex h-[100%] w-[100%]  ">
             <div className="w-3/4 h-[100%] overflow-scroll   bg-gray-800 bg-opacity-80">
               <div className="m-12 mb-0 border   overflow-scroll shadow-lg gap-4 flex flex-col justify-center items-center  ">
                   {console.log(menu)}
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