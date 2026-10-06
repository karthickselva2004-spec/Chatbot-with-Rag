function MessageBubble({ sender, text }) {

  return (

    <div className='bg-gray-100 p-3 rounded-xl'>

      <b>{sender}</b>

      <p>{text}</p>

    </div>

  )

}

export default MessageBubble