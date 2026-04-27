import { useState, useEffect } from "react";

function FetchDemo() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Fetch Demo</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>User Name: {name}</p>
      )}
    </div>
  );
}

export default FetchDemo;