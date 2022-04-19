import React , {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        setText(text.toUpperCase());
        props.showAlert("Uppercase was clicked", "success");
    }

    
    const handleLowClick = () => {
        console.log("Lowercase was clicked");
        setText(text.toLowerCase());
        props.showAlert("Lowercase was clicked", "success");
    }

    const speak = (text) => {
        console.log("Speak was clicked");
        const sp = new SpeechSynthesisUtterance(text);
        [sp.voice] = speechSynthesis.getVoices();
        speechSynthesis.speak(sp);
      }

    const handleSpeak = () =>{
        console.log("Speak was clicked");
        speak(text);
        props.showAlert("Text was synthesised to sound", "success");
    }

    const handleTrim = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    
    
    
    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    return (
    <>
    <div className = "container my-3" style = {{color: props.mode === 'light' ? 'black' : 'white'}} >
    <h2 >{props.title}  </h2>
    </div>
   
    <div className="container mb-3" style = {{color: props.mode === 'light' ? 'black' : 'white'}}>
    <textarea className="form-control"  value = {text} onChange = {handleOnChange} id="myBox" style = {{backgroundColor: props.mode=== "dark" ? "black" : "white", color: props.mode === "dark" ? "white" : "black"}} rows="8"></textarea>
    </div>
    <div className  = "container my-3">
    <button className="btn btn-primary mx-2" onClick = {handleUpClick} type="submit">Convert to uppercase</button>

    <button className="btn btn-primary mx-2" onClick = {handleLowClick} type="submit">Convert to lowercase</button>
    
    <button className="btn btn-primary mx-2" onClick = {handleSpeak} type="submit">Speak the words written</button>
    
    <button className="btn btn-primary mx-2" onClick = {handleTrim} type="submit">Trim the words written</button>

    </div>
    <div className = "container my-3" style = {{color: props.mode === 'light' ? 'black' : 'white'}}>
        <h4>Your text summary</h4>
         <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p> {0.008* text.split(" ").length} to read the text. </p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Enter something to preview here"}</p>
    </div>
    </>
  )
}
