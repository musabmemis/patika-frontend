import "./App.css";

import User from "./components/User";

const friends = [
  { 
    id:1,
    name: "Ahmet" 
  },
  { 
    id:2,
    name: "Tayfun" 
  },
  { 
    id:3,
    name: "Gökhan" 
  }
];

function App() {
  return (
    <>
      <User
        // name="Musab"
        surname="Memiş"
        isLoggedIn={true}
        age={29}
        friends={friends}
        address= {{
          title: 'Ataşehir/Istanbul',
          zip: 34755
        }}
      />
    </>
  );
}

export default App;
