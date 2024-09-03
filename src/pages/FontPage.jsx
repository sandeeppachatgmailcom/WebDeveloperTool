import FontPanel from "../components/common/FontPanel"
import DesignScreen from "../components/common/DesignScreen"

const FontPage = ()=>{
        return (
            <div className=" flex h-[100%] w-[100%] lg:flex-row flex-col   ">
                 <div className="w-full h-[100%] overflow-scroll    ">
                 <DesignScreen/>
                </div>
                <div className="flex w-full lg:w-1/4 overflow-scroll h-[100%] ">
                <FontPanel/>
                </div>
            </div>
        )
}

export default FontPage