import { useState } from "react"; 
import "./App.css"




function App(){
  const [count, setCount ] = useState(0);
  const [isRed, setRed ] = useState(false);

    const increment = ()=>{
      setCount(count + 1);
    }

    const decrement = ()=>{
      setCount(count - 1);
    }

    const changeColor = ()=>{
      setRed(!isRed);
    }

  return(
    <div className="container">
        <button onClick={ decrement }>Decrement</button>
        <button onClick={ increment }>Increment</button>
        <button onClick={ changeColor }>Change Color</button><br />
        <h2>{ count }</h2>
        <h2 className={ isRed ? "red" : "" }>Some Text</h2>
    </div>
  )
}

export default App;