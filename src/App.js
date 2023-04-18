// import logo from './logo.svg';
import './App.css';
// import TextArea1 from './components/TextArea1';
// import Navbar from './components/Navbar';\
import React,{useState} from 'react';


function App() {
 const [val,change]=useState("");
  const calculte=(e)=>{
    try{
    if(e.target.innerHTML=="C"){
      change("");
    }
    else if(e.target.innerHTML=="="){
      change(eval(val));
      
    }
    else{
      change(val+e.target.innerHTML);
    }
  }catch{
    alert("Please enter correct values")
  }
  }
  return (
    <div>
      <div className="container">
        <h1>Calculator</h1>
        <input type="text" className='inp' value={val} onChange={(e)=>change(STring.toString(e.value))}/>
        <div className="row">
          <button className='btn' onClick={calculte}>7</button>
          <button className='btn' onClick={calculte}>8</button>
          <button className='btn' onClick={calculte}>9</button>
          <button className='btn' onClick={calculte}>*</button>
        </div>
        <div className="row">
          <button className='btn' onClick={calculte}>4</button>
          <button className='btn' onClick={calculte}>5</button>
          <button className='btn' onClick={calculte}>6</button>
          <button className='btn' onClick={calculte}>/</button>
        </div>
        <div className="row">
          <button className='btn' onClick={calculte}>1</button>
          <button className='btn' onClick={calculte}>2</button>
          <button className='btn' onClick={calculte}>3</button>
          <button className='btn' onClick={calculte}>+</button>
        </div>
        <div className="row">
          <button className='btn' onClick={calculte}>0</button>
          <button className='btn' onClick={calculte}>-</button>
          <button className='btn' onClick={calculte}>=</button>
          <button className='btn' onClick={calculte}>C</button>
        </div>
      </div>
    </div>
    
  );
}

export default App;
