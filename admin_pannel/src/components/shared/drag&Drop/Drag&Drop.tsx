import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


const DragAndDrop = ({ onFilesAccepted }:any) => {
  const [filePreviews, setFilePreviews] = useState<any>([]);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      onDrop: (files) => {
        const newFilePreviews = files.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
        setFilePreviews([...filePreviews, ...newFilePreviews]);
        onFilesAccepted(files);
      },
    });

  return (
    <div {...getRootProps({ className: "dropzone" })} style={dropzoneStyle}>
      <input {...getInputProps()} />
      {isDragActive ? (
            <>
       <div style={{marginLeft:"auto",marginRight:"auto",display:"flex",justifyContent:"center"}} className="">
       <CloudUploadIcon style={{ color: 'green', fontSize: '48px' }} />
          </div>
     
       <div className="" style={{fontWeight:700,fontSize:20,textAlign:"center",marginBottom:10}}>Drop the files here ...</div>
       
       </>
      ) : (
       <>
       <div style={{marginLeft:"auto",marginRight:"auto",display:"flex",justifyContent:"center"}} className="">
       <CloudUploadIcon style={{ color: 'green', fontSize: '48px' }} />
          </div>
     
       <div className="" style={{fontWeight:700,fontSize:20,textAlign:"center",marginBottom:10}}>Drop your file here or Click to browse</div>
       <div className="" style={{fontWeight:500,fontSize:17,textAlign:"center",marginBottom:10}}>  File should be an image Like</div>
       
       </>
      )}
    
    </div>
  );
};

const dropzoneStyle = {
  border: "2px dashed #cccccc",
  borderRadius: "4px",
  padding: "20px",
  cursor: "pointer",
  backgroundColor: "#f9f9f9",
marginTop:"20px"
};

export default DragAndDrop;
