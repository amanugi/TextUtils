import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>

    <Navbar title = "TextUtils" about = "About"/>
    {/* <Navbar /> */}
    <div className="container my-5">
      <TextForm heading = "Enter the text to analyze below"/>
      {/* <About /> */}
    </div>
    
    </>
  );
}

export default App;
