import React from "react";

const Tasks=(props)=> {
  const [checkIn, setCheckIn] = React.useState({
    checked: false,
  });
  const Edit=(e)=> {
    if (!e.target.previousElementSibling.contentEditable) {
      e.target.previousElementSibling.contentEditable = false;
    } else {
      e.target.previousElementSibling.contentEditable = true;
    }
  }
  const Delete=(e)=> {
    e.target.parentNode.remove();
  }
  let checkingState = checkIn.checked;

  let settingState = (e) => {
    setCheckIn({
      checked: checkingState ? false : true,
    });
    Check(e);
  };
  const Check=(e) => {
    if (checkingState) {
      e.target.nextElementSibling.style.textDecoration = "none";
    } else {
      e.target.nextElementSibling.style.textDecoration = "line-through";
    }
  }
  return (
    <>
      {props.text.map((ele, index) => {
        return (
          <div key={index}>
            <input type="checkbox" onClick={(e) => settingState(e)}></input>
            <p style={{ border: "1px solid black" }}>{ele}</p>
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
            >
              delete
            </button>
          </div>
        );
      })}
    </>
  );
}


export default Tasks