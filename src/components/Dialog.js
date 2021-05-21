import React from "react";
import { RiVoiceprintFill } from "react-icons/ri";

const Dialog = ({ output}) => {
  return (
    <div className="dialog">
        <div className="output">
          <span className="icon"><RiVoiceprintFill /></span>
          {output}
        </div>
    </div>
  );
};

export default Dialog;
