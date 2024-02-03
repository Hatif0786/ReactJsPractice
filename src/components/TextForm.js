import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let ntext = text.toUpperCase();
    setText(ntext);
    props.showAlert("Converted to Uppercase!", "success")
  };

  const handleUpClick2 = () => {
    let ntext = text.toLowerCase();
    setText(ntext);
    props.showAlert("Converted to Lowercase!", "success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        &nbsp;
        <textarea
          className="form-control"
          id="my-box"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: `${props.mode === "dark" ? 'rgb(248,249,250)' : 'rgb(33,37,41)'}`, color: `${props.mode === "dark" ? 'rgb(33,37,41)' : 'rgb(248,249,250)'}` }}
        ></textarea>
      </div>
      <button onClick={handleUpClick} className="btn btn-warning" style={{ borderRadius: '17.5px' }}>Convert to Uppercase</button>&nbsp;&nbsp;
      <button onClick={handleUpClick2} className="btn btn-primary" style={{ borderRadius: '17.5px' }}>Convert to Lowercase</button>
      &nbsp;
      <div>
        <h2>Your text summary: {text.trim().split(" ").filter((a) => {return a.length!=0}).length} words and {text.length} characters</h2>
        <h3>{0.008 * text.trim().split(" ").filter((a) => {return a.length!=0}).length} Minutes Read</h3>
      </div>
    </>
  );
};

export default TextForm;