import React from 'react'

function Alert(props) {

    const capitalise = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

  return (
    <div style={{height: '50px'}}>
    {  props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <center><strong>{capitalise(props.alert.type)}</strong> : <strong>{props.alert.msg}</strong></center>
          {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
      </div>}
    </div>
  )
}

export default Alert;

