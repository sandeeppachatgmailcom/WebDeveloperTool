import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setFont } from "../../store/fontFamily"
import { changeTitle } from "../../store/titleSlice"

const EditTitleCard = ()=>{
    const dispatch = useDispatch()
    const [title,setTitle] = useState('')
    const [selectedItem,setSelectedItem] =useState('')
    const fontFamily = useSelector((state)=>state.font.fontLibrary)
    useEffect(()=>{
        handleChangeTitle();
    },[title])
    const handleChangeStyle = (item)=>{
         
        dispatch(setFont(item))
    }
    const handleChangeTitle = ()=>{
        dispatch(changeTitle(title))
    }





    return(
        <div className="h-[100%] w-[100%] bg-white  rounded p-10   ">
             <h1 className="text-xl ">{'Choose a site title and brand personality'}</h1>
             <br />
             <h1> {`Site title`}</h1>
             <br />
             <h1  className="text-sm">{`This is the name of your photography site. You can change it later.`}</h1>
             <input onChange={(e)=>setTitle(e.target.value)}  className="border  h-10 w-full focus:outline-none focus:border-b-black bg-gray-300 bg-opacity-15 text-sm "  type="text" />

             <br />
             <br />
             <h1 className="font-semibold" >{'Brand personality'}</h1>
             <br />
             <h1 className="text-sm">{`Each personality has a unique set of colors, fonts, and tone for creating AI-generated content. Having a clear brand personality can help build customer relationships.`}</h1>
             <div className="w-full flex   flex-wrap justify-center items-center">
                 
                {
                    Object.keys(fontFamily)?.map((item,index)=> <div key={index} onClick={()=>{setSelectedItem(item);handleChangeStyle(fontFamily[item])}} className={`flex-nowrap overflow-hidden text-wrap  text-sm justify-start text-center cursor-pointer items-center w-5/12   border h-10 m-2  ${item == selectedItem ?'bg-gray-200' :'' } p-1 `}>  {item.toUpperCase()} </div> )
                }

             </div>
        </div>
    )
}

export default EditTitleCard