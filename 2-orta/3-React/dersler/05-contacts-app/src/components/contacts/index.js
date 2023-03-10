import { useState, useEffect } from "react";
import  "./styles.css";
import List from "./list";
import Form from "./form";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Musab",
      phone_number: 123123
    },{
      fullname: "Mehmet",
      phone_number: 456457
    },{
      fullname: "Nazlı",
      phone_number: 987659
    }
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts}/>
    </div>
  );
}

export default Contacts;
