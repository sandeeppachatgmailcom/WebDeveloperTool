import {   useLayoutEffect, useState } from "react";

const ColourPilletn = ({ color }) => {
  const [pattern, setPattern] = useState({});

  useLayoutEffect(() => {
    setPattern({
      titleColour: `bg-${color?.titleColour}`,
      buttonColour: `bg-${color?.buttonColour}`,
      bgColour: `bg-${color?.bgColour}`
    });
  }, [color]);

   

  return (
    <div onClick={()=>console.log(pattern,'pattern')} className="flex w-full h-full rounded-full overflow-hidden">
       <div className={`w-4/12 border   ${pattern.titleColour } `} />
       <div className={`w-4/12 border   ${pattern.buttonColour } `} />
       <div className={`w-4/12 border   ${pattern.bgColour } `} />
    </div>
  );
};

export default ColourPilletn;
