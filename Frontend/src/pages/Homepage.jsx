import Navbar from '../components/Navbar'

function HomePage(){

return(

<div
className='
min-h-screen
bg-gradient-to-br
from-purple-100
via-white
to-blue-100
dark:from-gray-950
dark:via-black
dark:to-gray-900
transition-all duration-300
'
>

<Navbar/>

<div className='flex justify-center items-center h-[80vh]'>

<div className='text-center'>

<div className='text-8xl mb-5'>
🤖📄💬
</div>

<h1
className='
text-6xl
font-bold
dark:text-white
'
>
RAG Chat System
</h1>

<p
className='
mt-5
text-gray-500
dark:text-gray-300
text-xl
'
>
Upload documents and chat with AI
</p>

</div>

</div>

</div>

)

}

export default HomePage