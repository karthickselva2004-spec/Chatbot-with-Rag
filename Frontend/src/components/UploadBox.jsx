import { useRef } from "react";

function UploadBox({ handleFile }) {

const fileRef = useRef();

return(

<div
className="
border-4
border-dashed
border-gray-300
dark:border-gray-700
rounded-3xl
p-16
text-center
bg-white
dark:bg-gray-900
transition-all duration-300
"
>

<div className="text-6xl mb-4">
📁
</div>

<h2 className="text-2xl font-bold dark:text-white">

Drag files here

</h2>

<p className="text-gray-500 dark:text-gray-300 mt-3">

PDF, DOC, DOCX, XLS, XLSX supported

</p>

<input
type="file"
multiple

accept="
.pdf,
.doc,
.docx,
.xls,
.xlsx
"

ref={fileRef}
onChange={handleFile}
className="hidden"
/>

<button
onClick={()=>fileRef.current.click()}
className="
mt-6
bg-purple-600
text-white
px-8 py-3
rounded-xl
hover:bg-purple-700
"
>

Browse Files

</button>

</div>

)

}

export default UploadBox;