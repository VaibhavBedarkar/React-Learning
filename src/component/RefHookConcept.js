import React, { useRef } from 'react';

export default function RefHookConcept() {
    const inputEl = useRef(null);
   
    const onButtonClick = () => {
            inputEl.current.focus();
            console.log("Value on Click :", inputEl.current.value);
    };
    return (
      <>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
      </>
    );
  }