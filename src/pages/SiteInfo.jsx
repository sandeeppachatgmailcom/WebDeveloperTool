import { useResolvedPath } from "react-router-dom"
import EditTitleCard from "../components/TitleCard/EditTitleCard"
import TitleCard from "../components/TitleCard/TitleCard"
import { useSelector } from "react-redux"

const SiteInfo = ()=>{
    const font = useSelector((state)=>state.font.font)

    return(
        <div className="  w-full h-[100%] flex flex-col  lg:flex-row  ">
            <div className={`w-full lg:w-3/4 h-[100%]    justify-center items-center ${font.font} `}>
                <TitleCard/>      
            </div>
            <div className=" w-full lg:w-1/4 h-[100%]   overflow-scroll ">
                <EditTitleCard/>
            </div>
             
        </div>
    )
}

export default SiteInfo