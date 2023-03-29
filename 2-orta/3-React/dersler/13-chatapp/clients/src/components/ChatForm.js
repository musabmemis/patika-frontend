import { useState } from "react";
import "./styles.modules.css";
import { sendMessage } from "../socketApi";
import { useChat } from "../context/ChatContext";

function ChatForm() {
  const [message, setMessage] = useState("");

  const { setMessages } = useChat();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);

    setMessages((prevState) => [...prevState, { message   }]);

    sendMessage(message);

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
