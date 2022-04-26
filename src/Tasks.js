import React from "react";

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

export default Tasks;
