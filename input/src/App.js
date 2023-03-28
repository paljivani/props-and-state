import React,{useState} from 'react'
import './App.css';

function App(props) {

  const clear = ()=>{
    let newText = '';
    setText(newText)
  }

  const Change = (event)=>{
    setText(event.target.value)
  }


  const [texte, setText]= useState('');

  return (
    <div className="App margin">
      <div>
        <input  onChange={Change} value={texte} type="text">
          
        </input>
        <button onClick={clear}> clear</button>
    </div>
      <h2>{texte}</h2>
    </div>
  );
}
export default App;