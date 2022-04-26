import React from "react";
import Tasks from "./Tasks";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      todo: [],
    };
  }

  render() {
    async function fetchJSON() {
      const response = await fetch("https://api.github.com/users?since=135");
      const data = await response.json();
      return data;
    }
    if (this.state.isLoading) {
      fetchJSON().then((res) => {
        res.map((ele) => {
          return this.setState({
            ...this.state,
            todo: [...this.state.todo, ele.login],
          });
        });
      });
      this.setState({
        ...this.state,
        isLoading: false,
      });
    }

    const add_items = () => {
      const input_value = document.querySelector(".inputField").value;
      this.setState({
        ...this.state,
        todo: [...this.state.todo, input_value],
      });
      document.querySelector(".inputField").value = "";
    };
    return (
      <>
        <input
          className="inputField"
          id="new-task-input"
          placeholder="Write the task ToDo"
          type={"text"}
        ></input>
        <button className="new-task-submit" onClick={add_items}>
          Add
        </button>
        <br></br>
        <Tasks text={this.state.todo} />
      </>
    );
  }
}

export default Input;
