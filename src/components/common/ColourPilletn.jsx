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
    <div className="flex w-full h-full rounded-full bg-red-800  overflow-hidden">
       <div className={`w-4/12 ${pattern.titleColour } `} />
       <div className={`w-4/12 ${pattern.buttonColour } `} />
       <div className={`w-4/12 ${pattern.bgColour } `} />
    </div>
  );
};

export default ColourPilletn;
