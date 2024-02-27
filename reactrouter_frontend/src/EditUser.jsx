import { useEffect, useState } from 'react'
import { editdata, getdata,adddata } from './api/api';
import {useParams} from 'react-router-dom';

function EditUser() {
  const[fname,setfname]= useState("");
  const[lname,setlname]= useState("");
  const[email,setemail]= useState("");
  const[phone,setphone]= useState("");
    const {id} = useParams();
  

  useEffect(()=>{
    gettask();
  },[])

  const gettask = async()=>{
        const res = await getdata(id);
        setfname(res.data.first_name);
        setlname(res.data.last_name);
        setemail(res.data.email_id);
        setphone(res.data.contact_number);
  }
  
  const clickeditsumit = async()=>{
    const get = await editdata(id,{first_name :fname,last_name:lname,email_id:email,contact_number:phone});
    setfname("");
    setlname("");
    setemail("");
    setphone(" ");
    
  }

  
  

  return (
  
      <div>
       <div className = 'p-2 text-center text-4xl text-sky-600'>CRUD</div>
       <div className = 'py-12 px-80' >
        <div className = " text-4xl font-bold">Edit User</div>
        <div className=" py-5">
          <input
          type="text"
          onChange={(e)=>setfname(e.target.value)}
          value = {fname}
          placeholder = "FirstName"
          />
        </div >
        <div className=" py-5">
          <input
          type = "text"
          onChange={(e)=>setlname(e.target.value)}
          value={lname}
          placeholder= "lastname"
          />
        </div>
        <div className=" py-5">
          <input
          type = "text"
          onChange={(e)=>setemail(e.target.value)}
          value={email}
          placeholder="Email"
          />
        </div>
        <div className=" py-5">
          <input
          type= "text"
          onChange ={(e)=>setphone(e.target.value)}
          value={phone}
          placeholder="phone"
          />
        </div>
        <div className=" py-5">
          <button
          className='p-2 bg-sky-600 text-white'
          onClick={clickeditsumit}
          >
            Edit User
          </button>
        </div>
       </div>
      </div>
  
  )
}

export default EditUser;
