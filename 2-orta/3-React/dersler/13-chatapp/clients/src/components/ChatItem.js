import  "./styles.modules.css";
function ChatItem({item}) {
  return (
    <div className='chatItem'>
        {item.message}
    </div>
  )
}

export default ChatItem