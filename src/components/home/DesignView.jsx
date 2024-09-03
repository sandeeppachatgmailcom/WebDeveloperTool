import SelectionPanel from "./SelectionPanel"
import DesignScreen from "../common/DesignView"

 
const DesignView = ()=>{

        
    return(
        <div className="w-[100%] flex h-screen lg:h-[100%]  lg:flex-row flex-col  ">
            <div className=" h-[100%] overflow-scroll lg:w-full w-full  ">
                <DesignScreen/>
            </div>
            <div className="lg:w-1/4 h-[100%] w-full border-s">
                <SelectionPanel/>
            </div>
        </div>
    )
}

export default DesignView