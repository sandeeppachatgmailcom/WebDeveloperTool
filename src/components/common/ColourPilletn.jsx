 
const ColourPilletn = ({ color }) => {
  return (
    <div onClick={()=>console.log(color,'pattern')} className="flex w-full h-full rounded-full overflow-hidden">
       <div className={`w-4/12       ${color.titleColour.bg } `} />
       <div className={`w-4/12       ${color.buttonColour.bg } `} />
       <div className={`w-4/12     ${color.bgColour.bg } `} />
    </div>
  );
};

export default ColourPilletn;
