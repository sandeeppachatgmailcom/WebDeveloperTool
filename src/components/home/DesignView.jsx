import SelectionPanel from "./SelectionPanel"
import DesignScreen from "../common/DesignView"

 
const DesignView = ()=>{

        
    return(
        <div className="w-[100%] flex h-[100%]  ">
            <div className=" h-[100%] overflow-scroll w-full  ">
                <DesignScreen/>
            </div>
            <div className="w-1/4 h-[100%] border-s">
                <SelectionPanel/>
            </div>
        </div>
    )
}

export default DesignView