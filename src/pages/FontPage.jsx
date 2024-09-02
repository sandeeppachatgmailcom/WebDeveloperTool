import FontPanel from "../components/common/FontPanel"
import DesignScreen from "../components/common/DesignView"

const FontPage = ()=>{
        return (
            <div className=" flex h-[100%] w-[100%]  ">
                 <div className="w-full h-[100%] overflow-scroll    ">
                 <DesignScreen/>
                </div>
                <div className="flex w-1/4 overflow-scroll ">
                <FontPanel/>
                </div>
            </div>
        )
}

export default FontPage