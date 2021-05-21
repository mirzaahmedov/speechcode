import React, { useState, useEffect, useRef, useMemo } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-nord_dark";

import Dialog from "./components/Dialog";
import Status from "./components/Status";
import Alert from "./components/Alert";
import MicToggle from "./components/MicToggle";
import Help from "./components/Help";

const App = () => {
 const [mode, setMode] = useState("navigate");
 const [output, setOutput] = useState("");
 const [alert, setAlert] = useState(null);
 const [mic, setMic] = useState(true);
 const [showHelp, setShowHelp] = useState(true);

 const aceEditor = useRef(null);

 const SpeechRecognition =
  window.webkitSpeechRecognition || window.SpeechRecognition;

 const navigateCmds = {
  up: "navigateUp",
  down: "navigateDown",
  left: "navigateLeft",
  right: "navigateRight",
 };

 const editCmds = {
  delete: "removeWordRight",
  backspace: "removeWordLeft",
  destroy: "destroy",
  undo: "undo",
  redo: "redo",
 };

 const editExp = new RegExp(
  "(" + Object.keys(editCmds).join("|") + ")(?:\\s(\\d*))?",
  "gm"
 );

 const navigateExp = new RegExp(
  "(" + Object.keys(navigateCmds).join("|") + ")(?:\\s(\\d*))?",
  "gm"
 );

 const recognition = useMemo(() => new SpeechRecognition(), [
  SpeechRecognition,
 ]);

 recognition.continuous = true;

 recognition.onresult = function (e) {
  const text = Array.from(e.results)[e.results.length - 1][0].transcript;
  setOutput(text);
  if (text.trim() === "edit mode") {
   setAlert("edit mode enabled");
   setMode("edit");
   return;
  } else if (text.trim() === "navigate mode") {
   setAlert("navigate mode enabled");
   setMode("navigate");
   return;
  } else if (text.trim() === "insert mode") {
   setAlert("insert mode enabled");
   setMode("insert");
   return;
  } else if (mode === "insert") {
   aceEditor.current.editor.insert(text);
  } else if (mode === "edit") {
   let match = [];
   while ((match = editExp.exec(text))) {
    aceEditor.current.editor[editCmds[match[1]]](parseInt(match[2]));
   }
  } else if (mode === "navigate") {
   let match = [];
   while ((match = navigateExp.exec(text))) {
    aceEditor.current.editor[navigateCmds[match[1]]](parseInt(match[2]));
   }
  }
 };

 recognition.onend = function () {
  setMic(false);
 };

 useEffect(() => {
  if (mic) recognition.start();
  else recognition.abort();
 }, [mic, recognition]);

 return (
  <div>
   <AceEditor
    ref={aceEditor}
    mode="java"
    theme="nord_dark"
    fontSize={18}
    width="100%"
    height="calc(100vh - 20px)"
    highlightActiveLine={true}
    showGutter={true}
    showPrintMargin={true}
    style={{ fontFamily: "Fira Code, monospace" }}
   />
   <Dialog output={output} />
   <Status mode={mode} />
   {alert && <Alert alert={alert} setAlert={setAlert} />}
   <MicToggle mic={mic} setMic={setMic} />
   {showHelp && <Help setShowHelp={setShowHelp} />}
  </div>
 );
};

export default App;
