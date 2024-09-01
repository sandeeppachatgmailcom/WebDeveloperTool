import { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";

const useColourReleaseHook = () => {
  const theme = useSelector((state) => state.colorpillet.colour);
  const [colour, setColour] = useState({});
 
  useLayoutEffect(() => {
    const tempColour = {
      textColour: `text-${theme.titleColour} `,
      buttonColour: `bg-${theme.buttonColour} `,
      backGroundColour: `bg-${theme.bgColour} `
    };
    setColour(tempColour);
    console.log(tempColour.textColour,'tempColour')

  }, [theme]);  
 
  return colour;
};

export default useColourReleaseHook;
