import React, { useContext, useState } from "react";
import { AppContext } from "../App";

interface KeyProps {
  keyVal: string;
  bigKey: boolean;
  disabled: boolean;
}

const Key = (props: KeyProps) => {
  const { onSelectLetter, onDelete, onEnter } = useContext(AppContext);

  const selectLetter = () => {
    if (props.keyVal === "ENTER") {
      onEnter();
    } else if (props.keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(props.keyVal);
    }
  };

  return (
    <div
      className="key"
      id={props.bigKey ? "big" : props.disabled ? "disabled" : ""}
      onClick={selectLetter}
    >
      {props.keyVal}
    </div>
  );
};

export default Key;

// left off at 38:31
