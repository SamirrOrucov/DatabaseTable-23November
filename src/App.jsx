import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import uuid from "react-uuid";
function App() {
  const [user, setUser] = useState([]);
  const [input, setInput] = useState("");
  const [loader, setloader] = useState(false)
  async function getfetch() {
    
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setUser(data);
  }
  const changeHandle=(e)=>{
    setInput(info.filter((item)=>(((item.name.toLowerCase()).includes(e.target.value.toLowerCase())) ||((item.username.toLowerCase()).includes(e.target.value.toLowerCase())))))
  }

  useEffect(() => {
    setloader(true)
    getfetch();
    setloader(false)
  }, []);

  return (
    <>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="Search.."
      />
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Username</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
        </thead>
        <tbody>
          {user.map((x) => {
            if (
              x.phone.toLowerCase().includes(input.toLowerCase()) ||
              x.name.toLowerCase().includes(input.toLowerCase()) ||
              x.username.toLowerCase().includes(input.toLowerCase()) ||
              x.email.toLowerCase().includes(input.toLowerCase())
            ) {
              return (
                <tr key={uuid()}>
                  <td>{x.id}</td>
                  <td>{x.name}</td>
                  <td>{x.username}</td>
                  <td>{x.email}</td>
                  <td>{x.phone}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
