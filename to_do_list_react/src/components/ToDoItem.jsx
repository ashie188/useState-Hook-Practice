import React, { useState } from "react";

function ToDoitem(props) {
  /*const [isclicked, setisclicked] = useState(false);
  function handelinputclick() {
    setisclicked((prevValue) => {
      return !prevValue;
    });
  }*/

  return (
    <li
      onClick={() => {
        props.onChecked(props.id);
      }}
      style={{ textDecoration: isclicked ? "line-through" : "none" }}
    >
      {props.value}
    </li>
  );
}

export default ToDoitem;
