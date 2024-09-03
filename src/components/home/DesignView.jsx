import SelectionPanel from "./SelectionPanel"
import DesignScreen from "../common/DesignView"

 
const DesignView = ()=>{

        
    return(
        <div className="w-[100%] flex  h-[100%]    lg:flex-row flex-col  ">
            <div className=" h-[100%] overflow-scroll lg:w-full w-full  ">
                <DesignScreen/>
            </div>
            <div className="flex w-full lg:w-1/4 overflow-scroll h-[100%] ">
                <SelectionPanel/>
            </div>
        </div>
    )
}

export default DesignView