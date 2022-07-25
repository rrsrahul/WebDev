import { useEffect, useState } from 'react';
import Counter from './components/Counter';



function App() {

  const [counter,setCounter] = useState(10)
  useEffect(()=>{
    setCounter((prevCounter)=>{
      return prevCounter+10
    })
    console.log(counter)

  },[])
  return (
    <Counter counter = {counter}/>
  );
}

export default App;
