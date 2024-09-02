import { useEffect } from "react"
import { useSelector } from "react-redux"

const TitleCard = () => {
  const title = useSelector((state) => state.title.title)
  const fontStyle = useSelector((state) => state.font.font)
  useEffect(() => {
    console.log(fontStyle, 'fontStyle')
  }, [fontStyle])


  return (
    <div className="relative w-full h-full justify-center items-center overflow-hidden flex ">
      <div className="absolute w-full h-full text-gray-800 p-10 rounded flex flex-col justify-between items-center">
        <h1 className="text-8xl w-full">{title}</h1>
        <h1 className="text-8xl text-right w-full">{title}</h1>
        <h1 className="text-8xl text-start w-full ">{title}</h1>
        <h1 className="text-8xl text-end w-full">{title}</h1>
      </div>
      <div className="absolute w-full h-full bg-gray-900 bg-opacity-30 rounded flex flex-col justify-center items-center">
      </div>
      <div className="absolute flex flex-col justify-center rounded items-center w-[60%] h-[60%] bg-white bg-opacity-95">
        <h1 className="text-sm  px-10  w-full  m-1" >{`TEXT SAMPLE`}</h1>
        <h1 className="text-xl border-t border-black    w-[90%] m-1" >{`${fontStyle.discription}`}</h1>
      </div>

    </div>
  );
}

export default TitleCard