import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { nextMenu } from "../../../store/menuBar"

const  MenuBar = ()=>{
    const dispatch = useDispatch()
    const menuList =useSelector((state)=>state.menubar.menulist)
    const [menuIndex,setMenuIndex] = useState(0)
    const handleMenu = ()=>{
        dispatch(nextMenu(menuList[menuIndex]))
    }
    useEffect(()=>{
        handleMenu()
    },[menuIndex])

    return(
        
        <div className="w-[100%] h-[100%] flex justify-between items-center cursor-pointer ">
            {menuIndex>0 ?
            <div onClick={()=>{setMenuIndex(menuIndex-1 ) }} className="flex w-1/12 border h-[60%] bg-black text-white items-center justify-start p-2">
                BACK
            </div>:''}
            <div className="flex w-full justify-center">
            {
               menuList.map((item)=> <div className={`border-t h-10 p-1 text-sm w-1/12  text-end  ${item.index<= menuIndex ? 'border-black':'border-gray-300' } `} >{item.name}</div>
            )
            }
            
            </div>
             {menuIndex <=menuList.length?
             <div onClick={()=>{setMenuIndex(menuIndex+1) }} className="flex w-1/12 border h-[60%] bg-black text-white cursor-pointer items-center justify-end p-2">
                NEXT
            </div>:''}
        </div>
    )
} 

export default  MenuBar 