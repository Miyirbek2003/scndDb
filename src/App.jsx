import axios from "axios";
import React from "react";

export default function App() {
  const [users, setUsers] = React.useState([]);
  async function getUsers() {
    const response = await axios.get("https://ancient-hamlet-24907.herokuapp.com/users");
    setUsers(response.data);
  }

  React.useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <div>
        {users.map((item) => (
          <div key={item.id}>
            <span>{item.name}</span> <br />
            <span>{item.email}</span>
            <br />
            <br />
          </div>
        ))}
      </div>
    </>
  );
}
