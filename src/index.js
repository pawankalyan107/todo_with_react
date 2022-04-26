import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import Input from "./Input";

class Todo extends React.Component {
  render() {
    return (
      <>
        <h1>TODO</h1>
        <Input />
      </>
    );
  }
}

ReactDOM.render(<Todo />, document.getElementById("root"));
