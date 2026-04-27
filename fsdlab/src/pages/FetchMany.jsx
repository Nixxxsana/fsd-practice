import { useState, useEffect } from "react";

function FetchDemo2() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Fetch Demo</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        users.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default FetchDemo2;