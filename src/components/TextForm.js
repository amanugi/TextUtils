import React, {useState} from 'react'

function TextForm(props) {

    // setText acts as a function
    const[text, setText] = useState("");  

    const handleUpperClick = () => {
        //console.log("Uppercase was clciked");
        setText(text.toUpperCase());
        text.length && props.showAlert("Converted to uppercase!", "success");
    }

    const handleLowerClick = () => {
      setText(text.toLowerCase());
      
      text.length && props.showAlert("Converted to lowercase!", "success");
    }

    const handleClear = () => {
      setText('');
      text.length && props.showAlert("Cleared text!", "success");
    }

    const handleRemove = () => {
      let newText = text.split(/[ ]+/); // if there is any extra space except 1 then remove that
      setText(newText.join(' '));

      text.length && props.showAlert("Removed extra spaces!", 'success');
    }

    const handleChange = (event) => {
        //console.log("On change");
        setText(event.target.value);
    }

  return (
    <>
      <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea className="form-control" style = {{backgroundColor : props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} 
            id='myBox' rows="9" value={text} onChange={handleChange}></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleUpperClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert to LowerCase</button>
          <button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
          <button className="btn btn-primary mx-1" onClick={handleRemove}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h3>Your text summary</h3>
        <p>{text === '' ? 0 :  text.split(' ').length} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').length} minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : 'Enter something inside the above box to preview'}</p>
      </div>
    </>
  )
}

export default TextForm;
