import './App.css';
import { useState } from 'react';
import Faq from './components/faq/Faq';


function App() {
  const [count, setCount] = useState(0);
  const handleSubtract=()=>{
    setCount(count - 1);
  };
  const handleReset=()=>{
    setCount(0);
  }
  const handleAdd=()=>{
    setCount(count + 1);
  }

  let color = "#fff";
  if(count >=1){
    color = "yellow";
  }else if(count < 0){
    color = "red";
  }else{
    color = "white";
  }
  return (
    <section className='counter-sec --flex-center'>
        <div className='container counter --card --center-all'>
            <h1 className='--text-light'>React Counter App</h1>
            <p className='count --my2 --text-md --text-light --fw-bold' style={{color: color}}>{count}</p>
            <div className='buttons'>
                <button className='--btn --btn-danger' onClick={handleSubtract}>- Subtract</button>
                <button className='--btn --btn-info' onClick={handleReset}>! Reset</button>
                <button className='--btn --btn-success' onClick={handleAdd}>+ Add</button>
                
            </div>
              <Faq/>  
        </div>
        
    </section>
  );
}

export default App;
