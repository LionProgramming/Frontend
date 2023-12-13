import { useState } from "react";
import axios from 'axios'
function UploadImage() {
    const [image, setImage]=useState("");
    const [loading,setLoading]=useState(false)
    const key=744737558366745
    
    const handleSelectfile= async(event)=>{
        console.log(event.target.files[0])
        const file=event.target.files[0]
        console.log(file[0])
        const data= new FormData();
        data.append("file",file)
        data.append("api_key",key)
        data.append("upload_preset","he2nakb7")
        setLoading(true);
        try{
        const res = await axios.post(
            `https://api.cloudinary.com/v1_1/dgqrkoxks/image/upload`,data,{
                headers: { "Content-Type": "multipart/form-data" }
            }
        )
        const cloudinaryResponse=res.data;
        console.log(cloudinaryResponse.secure_url)
        setImage(cloudinaryResponse.secure_url)
      }catch(error){
        console.error(error)
      }finally{
        setLoading(false)
      }
    }
  return (
    <input type="file" accept="image/*" onChange={handleSelectfile} id="fileinput" />
  )
}

export default UploadImage