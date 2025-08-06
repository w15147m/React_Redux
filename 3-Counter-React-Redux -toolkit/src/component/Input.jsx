import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterInput } from "../store/indexStore";
export default function Input() {
  const [input, setInput] = useState("");
  const dispatch =    useDispatch();
  const handleClick = () => {
    dispatch(counterInput(input));
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
