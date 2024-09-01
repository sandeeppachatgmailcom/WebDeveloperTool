import { useEffect } from "react"
import { useSelector } from "react-redux"
import SiteInfo from "./SiteInfo"
import DesignView from "../components/home/DesignView"
import ColourPage from "./ColourPage"

const DesignerPanel = ()=>{
    const menu = useSelector((state)=>state.menubar.seletedMenu)
    useEffect(()=>{
        console.log(menu)
    },[menu])
    return(
        <div className="w-[100%] h-[100%]">
            {
                menu.index==0 ?<SiteInfo/>:menu.index==1?<DesignView/>:menu.index==2?<ColourPage/>:''
            }
        </div>
    )
}


export default DesignerPanel