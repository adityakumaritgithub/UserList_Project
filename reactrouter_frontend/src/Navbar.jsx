import { useState } from 'react'
import {Link} from 'react-router-dom';

function Navbar() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className='p-2 bg-slate-900 flex '>
    
    <div className='text-white px-4'>
        <Link to ='/' >All User</Link>
    </div>
    <div className='text-white'>
        <Link to='/AddUser' >Add User</Link>
    </div>
  
    </div> 
   
    </>
  )
}

export default Navbar;
