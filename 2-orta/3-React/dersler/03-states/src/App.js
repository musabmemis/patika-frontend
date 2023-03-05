import { useState } from "react";

function App() {
  const [name, setName] = useState("Musab");
  const [age, setAge] = useState(30);
  const [friends, setFriends] = useState(["Ahmet", "Mehmet"]);
  const [address, setAddress] = useState({
    title: "Istanbul",
    zip: 34756,
  });

  return (
    <div className="App">
      <h1>Merhaba {name}! </h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Ahmet")}>change name</button>
      <button onClick={() => setAge(29)}>change age</button>

      <hr />
      <br></br>
      <h2>Friends</h2>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
      <button onClick={() => setFriends(["Ayşe", ...friends])}>
        Add a new friend
      </button>

      <hr />
      <br></br>

      <h2>Address</h2>
      <div>
        {address.title} {address.zip}
      </div>

      <br />

      <button onClick={() => setAddress({ ...address, zip: 4444 })}>
        Change the address
      </button>
    </div>
  );
}

export default App;
