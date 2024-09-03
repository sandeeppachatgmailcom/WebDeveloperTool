import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { FaPlus } from "react-icons/fa6";
import { IoIosColorPalette } from "react-icons/io";
import { RxBoxModel } from "react-icons/rx";
import { LiaArrowRightSolid } from "react-icons/lia";
const Landing = () => {
    const navigate = useNavigate()
    const activeUser = useSelector((state) => state.activeUser.name)

    const handleStart = () => {
        console.log(activeUser)
        activeUser ? navigate('/home') : navigate('/loginPage')
    }

    return (
        <div className="  w-full flex h-[100] overflow-hidden  " >
            <div className="relative  w-0 overflow-hidden lg:w-3/4 h-full   justify-start bg-black items-center flex   ">
                <div className=" -rotate-45 w-[3500px] overflow-hidden  h-[2000px] bg-black  justify-between flex   ">
                    <div style={{backgroundImage:`url('https://assets.squarespace.com/static-images/conversion/left-column-a54fc58e08.webp')`,backgroundSize:'contain',backgroundPosition:'center'}} className="w-4/12 text-9xl  h-[2000px] border-white border-opacity-50 m-1 font-serif justify-center flex items-center  bg-gray-600 text-pink-500  motion-animation-down"> </div>
                    <div style={{backgroundImage:`url('https://assets.squarespace.com/static-images/conversion/middle-column-736c47e154.webp')`,backgroundSize:'contain',backgroundPosition:'center'}} className="w-4/12 text-9xl h-[2000px] border-white border-opacity-50 m-1 font-serif justify-center flex items-center   bg-gray-600 text-pink-500  motion-animation-up"> </div>
                    <div style={{backgroundImage:`url('https://assets.squarespace.com/static-images/conversion/right-column-26c862b8dd.webp')`,backgroundSize:'contain',backgroundPosition:'center'}} className="w-4/12 text-9xl h-[2000px] border-white border-opacity-50 m-1 font-serif justify-center flex items-center  bg-gray-600 text-pink-500  motion-animation-down"> </div>
                    </div>
                    <div className=" w-full h-full absolute">
                    
                    </div>
                </div>
               
            <div className=" w-full bg-black lg:w-1/4 flex flex-col items-center justify-between  h-[100%] ">
                <div className="text-white text-5xl m-5 p-5">
                     A template that's unique to you. 
                </div>
                <div className="text-white gap-4 text-xl flex flex-col m-5 p-5">
                    <div className="flex justify-start items-center gap-4 ">
                        <RxBoxModel /> <h1>Design your homepage </h1>
                    </div>
                    <div className="flex justify-start items-center gap-4 ">
                        <FaPlus /> <h1>Add the pages you need</h1>
                    </div>
                    <div className="flex justify-start items-center gap-4 ">
                        <IoIosColorPalette /> <h1>Choose your colors & fonts</h1>
                    </div>
                </div>
                
                <div onClick={handleStart} className=" mb-20   w-3/6 h-20 bg-white border justify-start cursor-pointer gap-4 items-center border-white  flex  " >
                     <h1 className="bg-white ps-4">Create WebSIte </h1> <LiaArrowRightSolid className="w-8 h-8"/>
                </div>
            </div>
        </div>
    )
}

export default Landing 