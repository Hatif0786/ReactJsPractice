import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter and Routes
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(33,37,41)";
      showAlert("Dark Mode has been enabled!", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Smooth Mode has been enabled!", "success");
      document.title = "TextUtils - Smooth Mode";
    }
  };

  return (
    <Router> {/* Wrap your application with Router */}
      <div>
      <Navbar title="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={
            <div className={`container my-3 bg-${mode === "dark" ? "dark" : "light"}`} style={{ color: `${mode === "dark" ? "white" : "black"}` }}>
              <TextForm showAlert={showAlert} heading="Enter the text to analyze below.." mode={mode} />
            </div>
          } />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
