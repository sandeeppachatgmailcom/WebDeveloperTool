import { useSelector } from "react-redux"
import UseRenderSection from "../../hooks/UseRenderSection"

const DesignScreen = ()=>{
    const menu = useSelector((state)=>state.sections.activeSections)
    const sectionRender = UseRenderSection()
    const font = useSelector((state)=>state.font.font)
    return(
        <div className={`w-full h-[100%] overflow-scroll ${font.font}`}>
        <div className="  mb-0     w-full shadow-lg gap-4 flex flex-col justify-center items-center  ">
           
             {
                 Object.keys(menu).map((item,index)=> menu[item] == true ?<div key={index} className="relative flex w-[90%] rounded h-screen overflow-hidden shadow-lg   text-white p-1">{item.toUpperCase()}
                  <div className="absolute h-[100%] w-full">
                  {sectionRender(item) } 
                  </div> 
                  </div>:''   ).sort()
             }
        </div> 
        </div>
    )
}

export default DesignScreen