import { useLayoutEffect, useState } from "react";
import classNames from 'classnames';

const ColourPillet = ({ color }) => {
    const [pattern, setPattern] = useState({});
    useLayoutEffect(() => {
        console.log(`bg-${color.titleColour}`, `bg-${color.buttonColour}`, `bg-${color.bgColour}`);
        setPattern({
            titleColour: `bg-${color.titleColour}`,
            buttonColour: `bg-${color.buttonColour}`,
            bgColour: `bg-${color.bgColour}`
        });
    }, [color]);

    return (
        <div className="flex w-full h-full rounded-full overflow-hidden">
            <div className={classNames('w-4/12', pattern.titleColour)} />
            <div className={classNames('w-4/12', pattern.buttonColour)} />
            <div className={classNames('w-4/12', pattern.bgColour)} />
        </div>
    );
};

export default ColourPillet;
