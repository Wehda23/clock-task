// Create Digital Clock that displays Hours Minutes & Seconds
import { useState } from 'react';
import './App.css'
import NumberContainer, { StaticNumberContainer } from './component/NumbersBox'

/*
*  First of all i need to give them the initial value of time
*   Then Each component will have to act on it's own to update time
*/
function App() {

  // Grab Current time
  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());
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

export default App
