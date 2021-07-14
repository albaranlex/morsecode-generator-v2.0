import React, { useState } from "react";
import Header from "./components/Header";
import CodeGenerator from "./components/CodeGenerator";
import Footer from "./components/Footer";

function App() {
  const [userInput, setUserInput] = useState("");
  function changeHandle(e) {
    setUserInput(e.target.value);
  }

  return (
    <div className="App">
      <Header />
      <div className="code-generator">
        <div className="left-box-bg"></div>
        <div className="right-box-bg"></div>
        <div className="input-container">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Enter your Text"
            value={userInput}
            onChange={changeHandle}
            autoFocus
          ></textarea>
        </div>
        <div className="button-container">
          <div className="button-wrapper">
            <button onClick={changeHandle}>RESET</button>
          </div>
        </div>
        <div className="morse-container">
          <div className="morse-wrapper">
            <div className="results">
              <CodeGenerator userInput={userInput} />
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
