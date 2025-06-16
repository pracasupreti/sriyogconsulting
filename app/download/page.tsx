"use client"
import { useEffect, useState } from "react"
type FileMeta = {
  title:string;
  url:string;
  size:string;
  type:string;
  lastUpdate:string;
}


export default function DownloadPage() {
const [files, setFiles] = useState<FileMeta[]>([])

const fetchMetadata = async () => {
  const fileList = [
    '/sriyog.pdf',
    '/pracas.dox'
  ]
  const metadata:FileMeta[]= await Promise.all(
    fileList.map(async(fileUrl)=>{

      const res = await fetch(fileUrl);
      const blob = await res.blob();
      const title = fileUrl.split('/',).pop()||"Unkown File";
      const size = `${(blob.size/1024).toFixed(2)} KB`;
      const type = blob.type || "Unkown Type";
      const lastUpdate = new Date().toLocaleDateString();
      return {title:title, url:fileUrl, size, type, lastUpdate}

    })
  )
 setFiles(metadata)
}

const handleDownload = async(url:string,name:string)=>{
   const res = await fetch(url);
   const blob = await res.blob();
   const objectUrl = window.URL.createObjectURL(blob);
   const a = document.createElement('a');
   a.href = objectUrl;
   a.download = name;
   document.body.appendChild(a);
   a.click();
   a.remove();
   window.URL.revokeObjectURL(objectUrl);
}


useEffect(()=>{
  fetchMetadata();
},[])


  return(
    <>

      <section className="max-w-[1180px] mx-auto p-4">
        <table className="w-full border-collapse ">
          <thead className="bg-gray-200  pt-2 " style={{borderSpacing:'0 12px'}}>
            <tr className="">
            <th className="py-2 pt-4 text-start">Title</th>
            <th className="py-2 pt-4 text-start">Size</th>
            <th className="py-2 pt-4 text-start">Type</th>
            <th className="py-2 pt-4 text-start">Last Update</th>
            <th className="py-2 pt-4 text-start">Download</th>
          </tr>
          </thead>

          <tbody >
            {files.map((item,index)=>(
              <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} `}>
                <td>{item.title}</td>
                <td>{item.size}</td>
                <td>{item.type}</td>
                <td>{item.lastUpdate}</td>
                <td>
                  <button 
                  onClick={()=>handleDownload(item.url,item.title)}
                  className="bg-[#055D59] text-white px-4 py-2 rounded hover:bg-[#044c4a] duration-200">
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  )
}






// "use client"
// import { useState, useEffect } from 'react';

// type FileMeta = {
//   title: string;
//   url: string;
//   size: string;
//   type: string;
//   lastUpdate: string;
// };

// export default function Home() {
//   const [files, setFiles] = useState<FileMeta[]>([]);

//   useEffect(() => {
//     const fileList = ['/sample.pdf']; 

//     const fetchMetadata = async () => {
//       const metadata: FileMeta[] = await Promise.all(
//         fileList.map(async (fileUrl) => {
//           const res = await fetch(fileUrl);
//           const blob = await res.blob();
//           const title = fileUrl.split('/').pop() || 'Unknown';
//           const size = `${(blob.size / 1024).toFixed(2)} KB`;
//           const type = blob.type || 'Unknown';
//           const lastUpdate = new Date().toLocaleDateString(); 

//           return { title, url: fileUrl, size, type, lastUpdate };
//         })
//       );
//       setFiles(metadata);
//     };

//     fetchMetadata();
//   }, []);

//   const handleDownload = async (url: string, name: string) => {
//     const res = await fetch(url);
//     const blob = await res.blob();
//     const objectUrl = window.URL.createObjectURL(blob);

//     const a = document.createElement('a');
//     a.href = objectUrl;
//     a.download = name;
//     document.body.appendChild(a);
//     a.click();
//     a.remove();
//     window.URL.revokeObjectURL(objectUrl);
//   };

//   return (
//     <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
//       <h2>Files Available for Download</h2>

//       <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
//         <thead style={{ backgroundColor: '#e0e0e0' }}>
//           <tr>
//             <th style={thStyle}>Title</th>
//             <th style={thStyle}>Size</th>
//             <th style={thStyle}>Type</th>
//             <th style={thStyle}>Last Update</th>
//             <th style={thStyle}>Download</th>
//           </tr>
//         </thead>
//         <tbody>
//           {files.map((file, index) => (
//             <tr
//               key={file.title}
//               style={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : '#ffffff' }}
//             >
//               <td style={tdStyle}>{file.title}</td>
//               <td style={tdStyle}>{file.size}</td>
//               <td style={tdStyle}>{file.type}</td>
//               <td style={tdStyle}>{file.lastUpdate}</td>
//               <td style={tdStyle}>
//                 <button
//                   style={{
//                     padding: '0.3rem 0.6rem',
//                     backgroundColor: '#1976d2',
//                     color: 'white',
//                     border: 'none',
//                     borderRadius: '4px',
//                     cursor: 'pointer',
//                   }}
//                   onClick={() => handleDownload(file.url, file.title)}
//                 >
//                   Download
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// const thStyle = {
//   padding: '0.75rem',
//   textAlign: 'left' as const,
//   borderBottom: '1px solid #ccc',
// };

// const tdStyle = {
//   padding: '0.75rem',
//   borderBottom: '1px solid #eee',
// };
