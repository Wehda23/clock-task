import { useState } from "react";
import NumberContainer, { StaticNumberContainer } from "./NumbersBox";






const DigitalClock = ({initialHours, initialMinutes, initialSeconds}) => {
    // Grab Current time
    const [hours, setHours] = useState(initialHours);
    const [minutes, setMinutes] = useState(initialMinutes);
    const [seconds, setSeconds] = useState(initialSeconds);
    // Parse it and pass it to the child components
    const handleHours = () => {
        setHours(0);
        setMinutes(0);
        setSeconds(0);
    }
    return (
        <div className='digital-clock'>
            {/* hours */}
            <StaticNumberContainer
                currentTime={hours}
                setTime={setHours}
                limitTime={24}
                onPassUpdate={handleHours}
            />
            {/* minutes */}
            <StaticNumberContainer
                currentTime={minutes}
                setTime={setMinutes}
                limitTime={60}
                onPassUpdate={() => setHours(hours + 1)}
            />
            {/* seconds */}
            <NumberContainer
                initialTime={seconds}
                timeInterval={1000}
                limitTime={60}
                onPassUpdate={() => setMinutes(minutes + 1)}
            />
        </div>
    )
}


export default DigitalClock;