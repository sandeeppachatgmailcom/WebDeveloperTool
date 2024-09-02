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
        <div className="  w-full flex h-[100%]   " >
            <div className="relative w-full overflow-hidden lg:w-3/4 h-full border justify-center flex  ">

                <div className="w-4/12 text-9xl h-screen border-white border-opacity-50 m-1 font-serif justify-center flex items-center  bg-gray-600 text-pink-500  motion-animation-down">
                 <img
                        className="w-full h-screen object-cover"
                        src="https://assets.squarespace.com/static-images/conversion/left-column-a54fc58e08.webp"
                        alt="Description of image"
                    />
                </div>
                <div className="w-4/12 text-9xl h-screen border-white border-opacity-50 m-1 font-serif justify-center flex items-center  bg-gray-600 text-pink-500  motion-animation-down">
                 <img
                        className="w-full h-screen object-cover"
                        src="https://assets.squarespace.com/static-images/conversion/middle-column-736c47e154.webp"
                        alt="Description of image"
                    />
                </div>
                <div className="w-4/12 text-9xl h-screen border-white border-opacity-50 m-1 font-serif justify-center flex items-center  bg-gray-600 text-pink-500  motion-animation-down">
                 <img
                        className="w-full h-screen object-cover"
                        src="https://assets.squarespace.com/static-images/conversion/right-column-26c862b8dd.webp"
                        alt="Description of image"
                    />
                </div>
                

                <div className=" w-full h-full absolute"></div>
            </div>
            <div className="w-full bg-black lg:w-1/4 flex relative h-[100%] ">
                <div onClick={handleStart} className="absolute w-3/6 h-[10%] border justify-start cursor-pointer items-center border-white bottom-32 start-10 flex  " >
                    <h1 className="text-white ps-4">Create WebSIte</h1>
                </div>
            </div>
        </div>
    )
}

export default Landing 