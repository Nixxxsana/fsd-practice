import { useState, useEffect } from "react";

function FetchDemo2() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {



    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();


    
  }, []);

  return (
    <div>
      <h2>Fetch Demo</h2>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {!loading && !error &&
        users.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <hr />
          </div>
        ))}
    </div>
  );
}

export default FetchDemo2;