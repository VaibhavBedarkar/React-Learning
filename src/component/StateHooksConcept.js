import { useState } from 'react';

export default function StateHooksConcept() { 
  const [inputText, setText] = useState('Vaibhav'); 

  function handleChange(e) { 
    setText(e.target.value); 
  } 

  return ( 
    <> 
      <input value={inputText} onChange={handleChange} /> 
      <p>You typed: {inputText}</p> 
    </> 
  ); 
} 