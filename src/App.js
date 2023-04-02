import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {

  const [mode, setMode] = useState('light');

  const[alert, setAlert] = useState(null);

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#181632';   // background color of app

      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout( () => {
      setAlert(null);
    }, 1500)
  };

  return (
    <>

    <Navbar title = "TextUtils" about = "About" mode={mode} toggleMode={toggleMode} />
    <Alert alert = {alert} />
    {/* <Navbar /> */}
    <div className="container my-5">
      <TextForm heading = "Enter the text to analyze below" mode={mode} showAlert={showAlert} />
      {/* <About /> */}
    </div>

    </>
  );
}

export default App;
