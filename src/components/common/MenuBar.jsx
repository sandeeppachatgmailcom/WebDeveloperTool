import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { nextMenu } from "../../store/menuBar"

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
        
        <div className="w-[100%]  h-[100%] flex justify-between items-center cursor-pointer p-1 ">
            {menuIndex>0 ?
            <div onClick={()=>{setMenuIndex(menuIndex-1 ) }} className="flex w-20  border h-[40%] hover:bg-gray-300 text-gray-800 items-center justify-center ms-4 p-2">
                BACK
            </div>:''}
            <div className="flex w-full justify-center">
            {
               menuList.map((item,index)=> <div key={index} className={`border-t h-10 p-1 text-sm w-1/12  text-end  ${item.index<= menuIndex ? 'border-black':'border-gray-300' } `} >{item.name}</div>
            )
            }
           
            </div>
             {menuIndex < menuList.length-1?
             <div onClick={()=>{setMenuIndex(menuIndex+1) }} className="flex w-20 border h-[40%] bg-black text-white cursor-pointer items-center justify-center me-4 p-2">
                NEXT
            </div>:''}
        </div>
    )
} 

export default  MenuBar 