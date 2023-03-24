import React, {useState} from 'react'

export default function TextForm(props) {

    // setText acts as a function
    const[text, setText] = useState("Enter a text");  

    const handleUpperClick = () => {
        //console.log("Uppercase was clciked");
        setText(text.toUpperCase());
    }

    const handleChange = (event) => {
        //console.log("On change");
        setText(event.target.value);
    }

  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label"></label>
        <textarea className="form-control" id='myBox' rows="9" value={text} onChange={handleChange}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpperClick}>Convert to Uppercase</button>
    </div>
  )
}
