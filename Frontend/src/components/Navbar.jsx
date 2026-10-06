import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

function Navbar(){

const [darkMode,setDarkMode]=useState(false);

useEffect(()=>{

if(darkMode){

document.documentElement.classList.add("dark");

}else{

document.documentElement.classList.remove("dark");

}

},[darkMode]);

return(

<div
className="
flex justify-between items-center
p-6
bg-white
dark:bg-gray-900
shadow
transition-all duration-300
"
>

<div className="flex gap-2 items-center">

<span className="text-4xl">
🤖
</span>

<h1
className="
text-2xl font-bold
text-purple-600
dark:text-white
"
>

RAG Chat System

</h1>

</div>

<div className="flex items-center gap-8">

<Link
to="/"
className="dark:text-white"
>
Home
</Link>

<Link
to="/upload"
className="dark:text-white"
>
Upload Documents
</Link>

<Link
to="/chat"
className="dark:text-white"
>
Chat Assistant
</Link>

<button
onClick={()=>setDarkMode(!darkMode)}
className="
bg-gray-200
dark:bg-gray-700
px-4 py-2 rounded-xl
dark:text-white
"
>

{darkMode ? "☀ Light" : "🌙 Dark"}

</button>

</div>

</div>

)

}

export default Navbar;

