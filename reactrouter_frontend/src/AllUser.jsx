import { useEffect, useState } from 'react'
import { getdata } from './api/api';
import {Link} from 'react-router-dom';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { deletedata } from './api/api';

function AllUser() {
   
    const[userdata,setuserdata] = useState([]);

   useEffect(()=>{
    const res = loaddata();
   })

   const loaddata = async()=>{
        const response = await getdata();
        console.log(response.data);
        setuserdata(response.data);
   }

   const deleteAlluser = (id)=>{
    deletedata(id);
    loaddata();
   }

  return (
    
     <div>
         <div className=' text-center text-3xl text-cyan-600'>CRUD</div>
        <div className='py-8 flex w-[70%] justify-between px-4'>
          <div>Name</div>
          <div>UserName</div>
          <div>Email</div>
          <div>Phone_No</div>
        </div>
        <div>
        {userdata.map((item)=>{
            return(
                <div key={item._id}>
               <div className = ' flex justify-between px-5'>
                <div>{item.first_name}</div>
                <div>{item.last_name}</div>
                <div>{item.email_id}</div>
                <div>{item.contact_number}</div>
                <div>
                <span
                className="cursor-pointer w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full text-blue-500"
              > <Link to={`/edit-user/${item._id}`}>
                <AiFillEdit size={20}></AiFillEdit>
                </Link>
              </span>
                </div>
                <div>
                <button
                    className='p-2 bg-red-600 text-white'
                    onClick = {()=>{deleteAlluser(item._id)}}
                >
                       Delete
                </button>
                </div>
               </div> 
               </div>
            );
        })}
        </div>
     </div>
    
  );
}

export default AllUser
