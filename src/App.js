import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tasks from "./Tasks";
// import Input from "./Input";

const App = (props) => {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" exact element={<Input/>} /> */}
          <Route path="/tasks" element={<Tasks text={props.text}/>} />
        </Routes>
      </BrowserRouter>
    
  );
};

export default App;
