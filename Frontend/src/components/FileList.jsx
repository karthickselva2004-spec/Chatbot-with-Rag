function FileList({
files,
handleUpload,
loading,
success
}){

return(

<div className='mt-8'>

<h2 className='font-bold text-xl'>
Selected Files
</h2>

{files.map((file,index)=>(

<p
key={index}
className='mt-2'
>

📄 {file.name}

</p>

))}

<button
onClick={handleUpload}
disabled={files.length===0}
className='mt-6 w-full bg-purple-600 text-white p-4 rounded-xl disabled:bg-gray-400'
>

Upload & Process

</button>

{loading && (

<div className='mt-5 bg-gray-100 p-4 rounded-xl'>

<p>⏳ Uploading...</p>


</div>

)}

{success && (

<div className="mt-5 bg-green-100 border border-green-400 text-green-700 p-4 rounded-xl">

✅ PDF uploaded successfully.
You can now ask questions.

</div>

)}

</div>

)

}

export default FileList