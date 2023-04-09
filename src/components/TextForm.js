import React, {useState} from 'react'

function TextForm(props) {

    // setText acts as a function
    const[text, setText] = useState("");  

    const handleUpperClick = () => {
        //console.log("Uppercase was clciked");
        setText(text.toUpperCase());
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLowerClick = () => {
      setText(text.toLowerCase());
      
      props.showAlert("Converted to lowercase!", "success");
    }

    const handleClear = () => {
      setText('');
      props.showAlert("Cleared text!", "success");
    }

    const handleRemove = () => {
      let newText = text.split(/[ ]+/); // if there is any extra space except 1 then remove that
      setText(newText.join(' '));

      props.showAlert("Removed extra spaces!", 'success');
    }

    const handleChange = (event) => {
        //console.log("On change");
        setText(event.target.value);
    }

  return (
    <>
      <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
          <h1 className='mb-3'>{props.heading}</h1>
          <div className="mb-3">
            <label htmlFor="myBox" className="form-label"></label>
            <textarea className="form-control" style = {{backgroundColor : props.mode === 'dark' ? '#455f7e' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} 
              id='myBox' rows="9" value={text} onChange={handleChange}></textarea>
            </div>
          <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpperClick}>Convert to Uppercase</button>
          <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowerClick}>Convert to LowerCase</button>
          <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
          <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleRemove}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h3>Your text summary</h3>
        {/* (/\s+/) => this is a regular expression for white spaces or new line */}
        <p>{text.split(/\s+/).filter( (element) => {return element.length !== 0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').filter( (element) => {return element.length !== 0}).length} minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : 'Nothing to preview!'}</p>
      </div>
    </>
  )
}

export default TextForm;
