import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FaCheckCircle } from "react-icons/fa";
import { CgRadioCheck } from "react-icons/cg"; 
import { editSections } from "../../store/section";

const SelectionPanel = ()=>{
    const menu = useSelector((state)=>state.sections.activeSections)
    const dispatch = useDispatch ()
    useEffect(()=>{
        console.log(menu)
    },[menu])
    const handleSections = (item)=>{
        console.log( menu)
       let tempMenu = {
            ...menu,
            [item]:!menu[item]
        }
        console.log( tempMenu)
        dispatch(editSections(tempMenu))
    }
    return(
        <div className="w-[100%] h-[100%] bg-white flex flex-col items-center justify-center overflow-scroll  ">
            <h1 className="flex items-center justify-center text-start   text-xl w-[80%]  font-semibold h-20  ">{`Create your homepage`}</h1>
            <h1 className="flex items-center justify-center text-start w-[80%]      h-20">{`Build your homepage section-by-section, adding as many or as few sections as you need.`}</h1>
            {
                Object.keys(menu).map((item,index)=> <div key={index} onClick={()=>handleSections(item)}  className="text-sm h-14 border-b  border-gray-400  w-[80%] flex cursor-pointer justify-start items-center    text-start">{menu[item]?<FaCheckCircle className="w-10" />:<CgRadioCheck className="w-10" />}   {item}</div> )
            }
        </div>
    )
}
export default SelectionPanel