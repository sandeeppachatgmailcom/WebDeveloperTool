import { useDispatch, useSelector } from "react-redux" 
import { changeTheme } from "../../store/colorSlice"
import ColourPilletn from "../common/ColourPilletn"
import { useState } from "react"

const ColorController = () => {
    const colorStore = useSelector((state) => state.colorpillet.colourLibrary)
    const dispatch = useDispatch()
    const [select, setSelected] = useState(null)
    const [selectedCategory,setSelectedCategory] = useState(null)
    const handlePilletColour = (pillet)=>{
        console.log(pillet,'color')
        dispatch(changeTheme(pillet))
    }



    return (
        <div className="w-[100%] h-[100%]  border-s  border-opacity-45 flex flex-col ">
            {
                Object.keys(colorStore).map((category,indexCount) => {
                    return (
                        <div key={indexCount} className="flex flex-col border-gray-300 border-opacity-10 p-2">
                            <h1 className="text-sm">{category.toUpperCase()}</h1>
                            <div className=" flex  h-10 w-full gap-2   justify-center items-center m-1">
                                {
                                    colorStore[category]?.map((pillet,index) => <div key={index} onClick={()=>{handlePilletColour(pillet); setSelected(index);setSelectedCategory(indexCount)}} className={`${select==index && indexCount == selectedCategory?'border p-1 border-gray-400  ':''} h-6 w-24 cursor-pointer shadow-md   rounded-full`} ><ColourPilletn color={pillet} />   </div>
                                    )
                                }
                            </div>
                        </div>
                    )
                })
            }



        </div>
    )
}

export default ColorController
