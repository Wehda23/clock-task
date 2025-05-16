// Create Digital Clock that displays Hours Minutes & Seconds
import './App.css'
import DigitalClock from './component/DigitalClock';

/*
*  First of all i need to give them the initial value of time
*   Then Each component will have to act on it's own to update time
*/
function App() {
  const hours = new Date().getHours()
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();
  return (
    <DigitalClock
      initialHours={hours}
      initialMinutes={minutes}
      initialSeconds={seconds}
    />
  )
}

export default App
