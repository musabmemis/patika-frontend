import React from "react";
import "./styles.modules.css";
import { useChat } from "../context/ChatContext";
import ChatItem from "./ChatItem";
import ScrollableFeed from "react-scrollable-feed";

function ChatList() {
  const { messages } = useChat();
  return (
    <div className="chatlist">
      <ScrollableFeed forceScroll={true}>
      {messages.map((item, key) => (
        <ChatItem key={key} item={item} />
      ))}
      </ScrollableFeed>
    </div>
  );
}

export default ChatList;
