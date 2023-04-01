import React, {useState} from 'react'

export default function TextForm(props) {

    // setText acts as a function
    const[text, setText] = useState("");  

    const handleUpperClick = () => {
        //console.log("Uppercase was clciked");
        setText(text.toUpperCase());
    }

    const handleLowerClick = () => {
      setText(text.toLowerCase());
    }

    const handleClear = () => {
      setText('');
    }

    const handleRemove = () => {
      let newText = text.split(/[ ]+/); // if there is any extra space except 1 then remove that
      setText(newText.join(' '));
    }

    const handleChange = (event) => {
        //console.log("On change");
        setText(event.target.value);
    }

  return (
    <>
      <div className="container">
          <h1>{props.heading}</h1>
          <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea className="form-control" id='myBox' rows="9" value={text} onChange={handleChange}></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleUpperClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert to LowerCase</button>
          <button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
          <button className="btn btn-primary mx-1" onClick={handleRemove}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3">
        <h3>Your text summary</h3>
        <p>{text === '' ? 0 :  text.split(' ').length} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').length} minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  )
}
