
import { useState } from 'react';
import './App.css';

const calcStyle = (value) => {


  if (value >= 1 && value <= 4)
    return '#33D7FF'
  if (value >= 5 && value <= 7)
    return '#33FFC2'
  if (value >= 8 && value <= 10)
    return '#33FF71'
  if (value >= 11 && value <= 13)
    return '#D9FF33'
  if (value >= 14)
    return '#FF5A33'
  if (value < 0 && value >= -3)
    return '#339BFF'
  if (value <= -4 && value >= -7)
    return '#334AFF'
  if (value <= -8)
    return '#E233FF'

}

function App() {



  const [number, updateNumber] = useState(0)
  const increaseHandler = () => {
    updateNumber((prevState) => prevState + 1)
  }

  const decreaseHandler = () => {
    updateNumber((prevState) => prevState - 1)
  }

  const increaseDecreaseHandler = () => {
    //const initial = number;
    increaseHandler();
    setTimeout(decreaseHandler, 1500)

  }

  const decreaseIncreaseHandler = () => {

    decreaseHandler();
    setTimeout(increaseHandler, 2000)

  }
  const color = calcStyle(number);
  console.log(color)
  return (
    <div className="App">
      <button onClick={increaseHandler}>Increase</button>
      <button onClick={decreaseHandler}>Decrease</button>
      <button onClick={increaseDecreaseHandler}>Increase-Decrease</button>
      <button onClick={decreaseIncreaseHandler}>Decrease-Increase</button>
      <p style={{ 'color':color, fontSize: '2rem' }}>{number}</p>
    </div>
  );
}

export default App;

