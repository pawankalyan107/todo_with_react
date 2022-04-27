import React, { useEffect, useState } from "react";
// import Tasks from "./Tasks";
import App from "./App";
// import SubProps from "./SubProps";

export default function Input() {
  const [todoList, setTodoList] = useState({
    todo: [],
    isLogged: true
  });
  useEffect(() => {
    fetchJSON().then((res) => {
      res.map((ele) => {
        return setTodoList((prevTodoList) => ({
          ...prevTodoList,
          todo: [...prevTodoList.todo, ele.login],
        }));
      });
    });
  }, []);
  async function fetchJSON() {
    const response = await fetch("https://api.github.com/users?since=135");
    const data = await response.json();
    return data;
  }

  // if(todoList.isLogged){
  //   <App text={todoList.todo}/>
  //   todoList.isLogged=false
  // }

  const add_items = (e) => {
    const input_value = e.target.previousElementSibling.value;
    setTodoList({
      ...todoList,
      todo: [...todoList.todo, input_value],
    });
    e.target.previousElementSibling.value = "";
  };
  return (
    <>
      <input
        id="new-task-input"
        placeholder="Write the task ToDo"
        type={"text"}
      ></input>
      <button onClick={add_items}>Add</button>
      <br></br>
      {/* <Tasks text={todoList.todo} /> */}
      {/* <SubProps text={todoList.todo} /> */}
      <App text={todoList.todo} />
    </>
  );
}
