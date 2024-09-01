import { useSelector } from "react-redux"
import SelectionPanel from "./SelectionPanel"
import Intro from "./sections/Intro"
import UseRenderSection from "../../hooks/UseRenderSection"

 
const DesignView = ()=>{

    const menu = useSelector((state)=>state.sections.activeSections)
    const sectionRender = UseRenderSection()
      
    return(
        <div className="w-[100%] flex h-[100%]  ">
            <div className="w-3/4 h-[100%] overflow-scroll   bg-yellow-100 bg-opacity-15">
               <div className="m-12 mb-0 border   overflow-scroll shadow-lg gap-4 flex flex-col justify-center items-center  ">
                   {console.log(menu)}
                    {
                        Object.keys(menu).map((item)=> menu[item] == true ?<div className="relative flex w-[90%] rounded h-screen   text-white p-1">{item.toUpperCase()}
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