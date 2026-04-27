import { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  const [show, setShow] = useState(false);
  const [dark, setDark] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div
    style={{
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
        height: "100vh",
        padding: "20px",
      }}
    >
      <button onClick={handleToggle}>
        {isOn ? "ON" : "OFF"}
      </button>

      <p>Status: {isOn ? "Enabled" : "Disabled"}</p>

      <br />
      
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Paragraph
      </button>

      {show && <p>This is a toggled paragraph</p>}

      <br />

      <button onClick={() => setDark(!dark)}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>

      <p>
        This is {dark ? "Dark Mode" : "Light Mode"}
      </p>


    </div>
  );
}

export default Toggle;