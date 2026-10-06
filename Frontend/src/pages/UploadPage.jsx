import { useState } from "react";

import axios from "axios";

import Navbar from "../components/Navbar";

import UploadBox from "../components/UploadBox";

import FileList from "../components/FileList";

import { BASE_URL } from "../config/api";

function UploadPage() {

const [files, setFiles] = useState([]);

const [loading, setLoading] = useState(false);

const [success, setSuccess] = useState(false);

const [extractedText, setExtractedText] =
useState("");

function handleFile(e) {

const selected =
Array.from(e.target.files);

const allowedFiles =
selected.filter(

(file) =>

file.type ===
"application/pdf"

||

file.type ===
"application/vnd.openxmlformats-officedocument.wordprocessingml.document"

||

file.type ===
"application/vnd.ms-excel"

||

file.type ===
"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"

);

if (allowedFiles.length === 0) {

alert(

"Only PDF, DOCX, XLSX, XLS files are allowed"

);

return;

}

setFiles((prevFiles) => [

...prevFiles,

...allowedFiles,

]);

}

async function handleUpload() {

if (files.length === 0) {

alert("Please select a file");

return;

}

try {

setLoading(true);

setSuccess(false);

const formData =
new FormData();

formData.append(
"file",
files[0]
);

const response =
await axios.post(

`${BASE_URL}/api/upload`,

formData,

{

headers: {

"Content-Type":
"multipart/form-data",

},

}

);

console.log(response.data);

setExtractedText(
response.data.text
);

setLoading(false);

setSuccess(true);

setFiles([]);

} catch (error) {

console.log(error);

setLoading(false);

alert("Upload Failed");

}

}

return (

<div
className="
min-h-screen
bg-gray-100
dark:bg-gray-950
transition-all
duration-300
"
>

{/* Navbar */}

<Navbar />

{/* Upload Section */}

<div
className="
flex
justify-center
items-center
py-10
"
>

<div
className="
bg-white
dark:bg-gray-900
dark:text-white
p-10
rounded-3xl
shadow-xl
w-[900px]
transition-all
duration-300
"
>

<h1
className="
text-4xl
font-bold
"
>

Upload Documents

</h1>

<p
className="
text-gray-500
dark:text-gray-300
mb-8
"
>

Upload PDF, DOCX, XLSX files

</p>

{/* Upload Box */}

<UploadBox
handleFile={handleFile}
/>

{/* File List */}

<FileList
files={files}
handleUpload={handleUpload}
loading={loading}
success={success}
/>

{/* Extracted Text */}

{extractedText && (

<div
className="
mt-10
bg-gray-100
dark:bg-gray-800
p-5
rounded-xl
max-h-[400px]
overflow-y-auto
"
>

<h2
className="
text-2xl
font-bold
mb-4
"
>

Extracted Text

</h2>

<p className="whitespace-pre-wrap">

{extractedText}

</p>

</div>

)}

</div>

</div>

</div>

);

}

export default UploadPage;