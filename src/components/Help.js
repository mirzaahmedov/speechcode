import React from "react";
import { IoMdClose } from "react-icons/io";

const Help = ({ setShowHelp }) => {
 return (
  <div className="overlay">
   <div className="modal">
    <h1 className="title">
     Help Window{" "}
     <span
      className="close-btn"
      onClick={() => {
       setShowHelp(false);
      }}
     >
      <IoMdClose />
     </span>
    </h1>
    <div className="content">
     <ul className="command-list">
      <h3>Editor modes</h3>
      <li>
       <span className="command">Edit mode</span> - Enables Edit mode
      </li>
      <li>
       <span className="command">Navigate mode</span> - Enables Navigate mode
      </li>
      <li>
       <span className="command">Insert mode</span> - Enables Insert mode
      </li>
      <h3>Edit Mode</h3>
      <li>
       <span className="command">Delete</span> - removes (N or 1) words from
       right
      </li>
      <li>
       <span className="command">Backspace</span> - removes (N or 1) words from
       left
      </li>
      <li>
       <span className="command">Destroy</span> - destroys current document
      </li>
      <li>
       <span className="command">Undo</span> - Undo (N or 1) last change
      </li>
      <li>
       <span className="command">Redo</span> - Redo (N or 1) last change
      </li>
      <h3>Navigate Mode</h3>
      <li>
       <span className="command">Left</span> - moves cursor left (N or 1)
       characters
      </li>
      <li>
       <span className="command">Right</span> - moves cursor right (N or 1)
       characters
      </li>
      <li>
       <span className="command">Up</span> - moves cursor up (N or 1) lines
      </li>
      <li>
       <span className="command">Down</span> - moves cursor down (N or 1) lines
      </li>
      <h3>Insert mode</h3>
      <li>types what ever you want</li>
     </ul>
    </div>
   </div>
  </div>
 );
};

export default Help;
