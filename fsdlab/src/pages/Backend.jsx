import { useState } from "react";

function Backend() {
  const [data, setData] = useState("");

  const callBackend = async () => {
    try {
      const res = await fetch("http://localhost:5000/");
      const result = await res.text(); // because you used res.send("wow")
      setData(result);
    } catch (err) {
      setData("Error calling backend");
    }
  };

  return (
    <div>
      <h2>Call Backend</h2>

      <button onClick={callBackend}>
        Call Backend
      </button>

      <p>Response: {data}</p>
    </div>
  );
}

export default Backend;