import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Landing = () => {
    const navigate = useNavigate()
    const activeUser = useSelector((state) => state.activeUser.name)

    const handleStart = () => {
        console.log(activeUser)
        activeUser ? navigate('/home') : navigate('/loginPage')
    }

    return (
        <div className="relative  w-full flex h-[100%]   " >
            <div className="  w-full overflow-hidden lg:w-3/4 h-full border justify-start bg-black items-center flex   ">
            <div className=" -rotate-45 w-[3500px] overflow-hidden  h-[2000px] bg-black  justify-between flex   ">
                <div style={{backgroundImage:`url('https://assets.squarespace.com/static-images/conversion/left-column-a54fc58e08.webp')`,backgroundSize:'cover',backgroundPosition:'center'}} className="w-4/12 text-9xl  h-[2000px] border-white border-opacity-50 m-1 font-serif justify-center flex items-center  bg-gray-600 text-pink-500  motion-animation-down"> </div>
                <div style={{backgroundImage:`url('https://assets.squarespace.com/static-images/conversion/middle-column-736c47e154.webp')`,backgroundSize:'cover',backgroundPosition:'center'}} className="w-4/12 text-9xl h-[2000px] border-white border-opacity-50 m-1 font-serif justify-center flex items-center   bg-gray-600 text-pink-500  motion-animation-up"> </div>
                <div style={{backgroundImage:`url('https://assets.squarespace.com/static-images/conversion/right-column-26c862b8dd.webp')`,backgroundSize:'cover',backgroundPosition:'center'}} className="w-4/12 text-9xl h-[2000px] border-white border-opacity-50 m-1 font-serif justify-center flex items-center  bg-gray-600 text-pink-500  motion-animation-down"> </div>
                </div>
            </div>
            <div className=" w-full h-full absolute"></div>
            <div className="w-full bg-black lg:w-1/4 flex relative h-[100%] ">
                <div onClick={handleStart} className="absolute w-3/6 h-[10%] border justify-start cursor-pointer items-center border-white bottom-32 start-10 flex  " >
                    <h1 className="text-white ps-4">Create WebSIte</h1>
                </div>
            </div>
        </div>
    )
}

export default Landing 