import { useEffect, useState } from "react"




const NumberContainer = ({initialTime, timeInterval, limitTime, onPassUpdate}) => {
    const [currentTime, setCurrentTime] = useState(initialTime);

    useEffect(() => {
        // Here We are checking if time is passed it's limit
        if (currentTime === limitTime)
        {   // If passed limit reset time back to 0
            setCurrentTime(0);
            onPassUpdate();
        }
        else {
            // Apply Set timeout to update the time.
             setTimeout(() => setCurrentTime(currentTime + 1), timeInterval)
        }
    },[currentTime])

    return (
        <div className="number-box">
            {currentTime < 10 && <span>0</span>}
            <span>{currentTime}</span>
        </div>
    )
}



export default NumberContainer;


export const StaticNumberContainer = ({currentTime, limitTime, setTime, onPassUpdate}) => {
    if (currentTime > limitTime){
        setTime(0);
        if (onPassUpdate)
            onPassUpdate();
    };
    return (
    <div className="number-box">
        {currentTime < 10 && <span>0</span>}
        <span>{currentTime}</span>
    </div>
    )
}