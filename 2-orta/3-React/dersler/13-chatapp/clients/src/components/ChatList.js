import React from "react";
import "./styles.modules.css";
import { useChat } from "../context/ChatContext";
import ChatItem from "./ChatItem";

function ChatList() {
  const { messages } = useChat();
  return (
    <div className="chatlist">
      <div>
      {messages.map((item, key) => (
        <ChatItem key={key} item={item} />
      ))}
      </div>
    </div>
  );
}

export default ChatList;
