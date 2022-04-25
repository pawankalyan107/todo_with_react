import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

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
			const response = await fetch('https://api.github.com/users?since=135');
			const data = await response.json();
			return data;
		}
		if (this.state.isLoading){
      fetchJSON().then(res=>{
        res.map((ele)=>{
          return this.setState({
            ...this.setState,
            todo: [...this.state.todo, ele.login]
          })
        })
      })
      this.setState({
        ...this.state,
        isLoading:false
      })
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

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }
  render() {
    function Edit(e) {
      if (!e.target.previousElementSibling.contentEditable) {
        e.target.previousElementSibling.contentEditable = false;
      } else {
        e.target.previousElementSibling.contentEditable = true;
      }
    }

    function Delete(e) {
      e.target.parentNode.remove();
    }

    let checkingState = this.state.checked;
    //console.log(checkingState)
    let settingState = (e) => {
      this.setState({
        checked: checkingState ? false : true,
      });
      Check(e);
    };

    function Check(e) {
      if (checkingState) {
        e.target.nextElementSibling.style.textDecoration = "none";
      } else {
        e.target.nextElementSibling.style.textDecoration = "line-through";
      }
    }

    return (
      <>
        {this.props.text.map((ele, index) => {
          return (
            <div key={index} className="task">
              <input type="checkbox" onClick={(e) => settingState(e)}></input>
              <p className="tag" style={{ border: "1px solid black" }}>
                {ele}
              </p>
              <button
                onClick={(e) => {
                  Edit(e);
                }}
              >
                edit
              </button>
              <button
                onClick={(e) => {
                  Delete(e);
                }}
                className="delete"
              >
                delete
              </button>
            </div>
          );
        })}
      </>
    );
  }
}

ReactDOM.render(<Todo />, document.getElementById("root"));
