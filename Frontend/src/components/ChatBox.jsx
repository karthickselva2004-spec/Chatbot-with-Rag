import {useState} from 'react'
import MessageBubble from './MessageBubble'

function ChatBox(){

const [question,setQuestion]=useState('')
const [messages,setMessages]=useState([])

function sendMessage(){

const user={sender:'User',text:question}

const ai={
sender:'AI',
text:'React uses virtual DOM efficiently.'
}

setMessages([...messages,user,ai])
setQuestion('')
}
return(
<div>

<div className='h-96 border rounded-xl p-4 overflow-y-auto space-y-4'>

{messages.map((msg,index)=>(
<MessageBubble
key={index}
sender={msg.sender}
text={msg.text}
/>
))}

</div>

<div className='flex gap-3 mt-5'>

<input
value={question}
onChange={(e)=>setQuestion(e.target.value)}
placeholder='Ask from uploaded PDF...'
className='flex-1 border p-3 rounded-xl'
/>

<button
onClick={sendMessage}
disabled={!question}
className='bg-purple-600 text-white px-6 rounded-xl disabled:bg-gray-400'
>
Send
</button>

</div>

</div>
)
}

export default ChatBox