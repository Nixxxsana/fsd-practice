import { useState, useEffect } from "react";

function UseDemo() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("");

//   useEffect(() => {
//     setMsg("1️⃣ Runs on EVERY render");
//   });

  useEffect(() => {
    setMsg("2️⃣ Runs ONLY on first load");
  }, []);

  useEffect(() => {
    setMsg(`3️⃣ Runs when count changes: ${count}`);
  }, [count]);

  return (
    <div>
      <p>{msg}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

export default UseDemo;