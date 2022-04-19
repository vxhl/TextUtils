import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
// import About from './components/About';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light'); // State of the theme
  const[alert, setAlert] = useState(null);
  

  // This takes a message and uses the different types of alerts!
  const showAlert = (message, type) => {
    setAlert({
      msg: message, 
      type: type
    });

    setTimeout(() => {
      setAlert(null);
  }, 1500);
}
  
  const toggleDarkMode = () => {
    if(mode === 'light')
    {
    setMode('dark');
    document.body.style.backgroundColor = '#00043f';
    showAlert("Dark mode has been enabled", "success");
    }
    else
    {
      
      setMode('light');
      
    document.body.style.backgroundColor = 'white';
    
    showAlert("Light mode has been enabled", "success");
    }
  }

  const toggleRedMode = () => {
    if(mode === 'light' || mode === 'dark') 
    {
    setMode('dark');
    document.body.style.backgroundColor = '#8B0000';
    showAlert("Red mode has been enabled", "success");
    }
    else
    {
      
      setMode('light');
      
    document.body.style.backgroundColor = 'white';
    
    showAlert("Light mode has been enabled", "success");
    }
  } 
  return (
    <>
{/* <Router> */}
    <Navbar title="TextUtils" mode = {mode} toggleDarkMode={toggleDarkMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Switch> */}
          {/* <Route path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route path="/"> */}
          <TextForm showAlert = {showAlert} mode = {mode} title = "Enter the text to be analysed"/>
          {/* </Route> */}
        {/* </Switch> */}
    
    </div>
</>
  );
}

export default App;
