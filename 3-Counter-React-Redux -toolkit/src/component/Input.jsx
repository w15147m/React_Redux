import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Input() {
  const [input, setInput] = useState("");
   const dispatch =    useDispatch();
   const counter = useSelector((state) => state.count);
 useEffect(() => {
    setInput(counter.toString()); // if `counter` is a number
  }, [counter]);
  const handleClick = () => {
   
   dispatch({type: 'input', payload: input });
  };

 

  return (
    <div>
      <input
        type="text"
        className="form-control m-2"
        placeholder="Number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="btn btn-primary" onClick={handleClick}>
        Count
      </button>
    </div>
  );
}
