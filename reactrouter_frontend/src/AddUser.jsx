import { useEffect, useState } from 'react'
import { editdata, getdata,adddata } from './api/api';


function AddUser() {
  const[fname,setfname]= useState("");
  const[lname,setlname]= useState("");
  const[email,setemail]= useState("");
  const[phone,setphone]= useState("");
  

  
  
  const clicksumit = async()=>{
    const get = await adddata({first_name :fname,last_name:lname,email_id:email,contact_number:phone});
    setfname("");
    setlname("");
    setemail("");
    setphone(" ");
    
  }

  
  

  return (
  
      <div>
       <div className = 'p-2 text-center text-4xl text-sky-600'>CRUD</div>
       <div className = 'py-12 px-80' >
        <div className = " text-4xl font-bold">Add User</div>
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
          onClick={clicksumit}
          >
            ADD User
          </button>
        </div>
       </div>
      </div>
  
  )
}

export default AddUser;
