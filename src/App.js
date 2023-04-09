import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// React Router
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';



function App() {

  const [mode, setMode] = useState('light');

  const[alert, setAlert] = useState(null);

  // const removeBodyClasses = () => {
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-danger');
  // }

  const toggleMode = () => {
    // removeBodyClasses();

    // console.log('Class', cls);

    // document.body.classList.add('bg-' + cls);

    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#181632';   // background color of app

      //showAlert("Dark mode has been enabled", "success");
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
    <Router>

    <Navbar title = "TextUtils" about = "About" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    {/* <Navbar /> */}
    <div className="container my-5">
      <Routes>
        <Route exact path="/about" element={<About mode={mode} />} >
        </Route>
        <Route exact path="/" element={<TextForm heading="Try-TextUtils"  mode={mode} showAlert={showAlert} />}>
        </Route>
      </Routes>
    </div>
    
    </Router>
    </>
  );
}

export default App;
