import { useState } from "react";
import "./styles.modules.css";

function ChatForm() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    setMessage("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="textInput"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </div>
  );
}

export default ChatForm;
