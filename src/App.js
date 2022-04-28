import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tasks from "./Tasks";
import Input from "./Input";


const App = () => {

  const [todoList, setTodoList] = React.useState({
    todo: [],
  });
  React.useEffect(() => {
    fetchJSON().then((res) => {
      res.map((ele) => {
        console.log(ele);
        return setTodoList((prevTodoList) => ({
          ...prevTodoList,
          todo: [...prevTodoList.todo, ele.login],
        }));
      });
    });
  }, []);
  const fetchJSON=async()=> {
    const response = await fetch("https://api.github.com/users?since=135");
    const data = await response.json();
    return data;
  }
  const add_items = (e) => {
    const input_value = e.target.previousElementSibling.value;
    setTodoList({
      ...todoList,
      todo: [...todoList.todo, input_value],
    });
    e.target.previousElementSibling.value = "";
  };
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Input add={add_items} />} />
        <Route path="/tasks" element={<Tasks text={todoList.todo} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
