import styles from  "./styles.modules.css";
function ChatItem({item}) {
  return (
    <div className={`chatItem ${item.fromMe ? styles.ChatItemright : ""}`}>
        {item.message}
    </div>
  )
}

export default ChatItem