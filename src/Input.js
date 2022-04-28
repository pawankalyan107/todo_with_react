import React from "react";

 const Input =(props)=> {
  return (
    <>
      <input
        id="new-task-input"
        placeholder="Write the task ToDo"
        type={"text"}
      ></input>
      <button onClick={props.add}>Add</button>
      <br></br>
    </>
  );
}

export default Input