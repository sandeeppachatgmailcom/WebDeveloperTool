import { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";

const useColourReleaseHook = () => {
  const theme = useSelector((state) => state.colorpillet.colour);
  const [colour, setColour] = useState({});
 
  useLayoutEffect(() => {
    const tempColour = {
      textColour: `${theme.titleColour} `,
      buttonColour: `${theme.buttonColour} `,
      backGroundColour: `${theme.bgColour} `
    };
    setColour(tempColour);
    console.log(tempColour.textColour,'tempColour')

  }, [theme]);  
 
  return colour;
};

export default useColourReleaseHook;
