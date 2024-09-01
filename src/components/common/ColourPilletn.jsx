import {   useLayoutEffect, useState } from "react";
import { FaSquareFull } from "react-icons/fa";
const ColourPilletn = ({ color }) => {
  const [pattern, setPattern] = useState({});

  useLayoutEffect(() => {
    setPattern({
      titleColour: `${color?.titleColour}`,
      buttonColour: `${color?.buttonColour}`,
      bgColour: `${color?.bgColour}`
    });
  }, [color]);

   

  return (
    <div onClick={()=>console.log(pattern,'pattern')} className="flex w-full h-full rounded-full overflow-hidden">
       <FaSquareFull className={`${color.titleColour } w-4/12  h-full`} /> 
       <div className={`w-4/12       ${color.buttonColour } `} />
       <div className={`w-4/12     ${color.bgColour } `} />
    </div>
  );
};

export default ColourPilletn;
