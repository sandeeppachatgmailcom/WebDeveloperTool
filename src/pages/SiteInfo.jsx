import { useResolvedPath } from "react-router-dom"
import EditTitleCard from "../components/TitleCard/EditTitleCard"
import TitleCard from "../components/TitleCard/TitleCard"
import { useSelector } from "react-redux"

const SiteInfo = ()=>{
    const font = useSelector((state)=>state.font.font)

    return(
        <div className="  w-full h-[100%] flex ">
            <div className={`w-3/4 h-[100%] border justify-center items-center ${font.font} `}>
                <TitleCard/>      
            </div>
            <div className=" w-1/4 h-[100%] border overflow-scroll ">
                <EditTitleCard/>
            </div>
             
        </div>
    )
}

export default SiteInfo