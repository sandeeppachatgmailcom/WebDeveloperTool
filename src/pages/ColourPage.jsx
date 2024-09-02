import { useSelector } from "react-redux"
import ColorController from "../components/Colors/ColorController"
import UseRenderSection from "../hooks/UseRenderSection"
import DesignView from "../components/home/DesignView"
import DesignScreen from "../components/common/DesignView"

const ColourPage = () => {

    return (
        <div className=" flex h-[100%] w-[100%]  ">
            <div className="w-full h-[100%] overflow-scroll    ">
                <DesignScreen />
            </div>
            <div className="flex w-1/4 overflow-scroll ">
                <ColorController />
            </div>
        </div>
    )
}

export default ColourPage