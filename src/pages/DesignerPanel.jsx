import { useEffect } from "react"
import { useSelector } from "react-redux"
import SiteInfo from "./SiteInfo"
import DesignView from "../components/home/DesignView"

const DesignerPanel = ()=>{
    const menu = useSelector((state)=>state.menubar.seletedMenu)
    useEffect(()=>{
        console.log(menu)
    },[menu])
    return(
        <div className="w-[100%] h-[100%]">
            {
                menu.index==0 ?<SiteInfo/>:menu.index==1?<DesignView/>:''
            }
        </div>
    )
}


export default DesignerPanel