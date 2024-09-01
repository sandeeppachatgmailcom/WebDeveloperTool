import {   useLayoutEffect, useState } from "react";

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
       <div className={`w-4/12 border   ${color.titleColour } `} />
       <div className={`w-4/12 border   ${color.buttonColour } `} />
       <div className={`w-4/12 border   ${color.bgColour } `} />
    </div>
  );
};

export default ColourPilletn;
