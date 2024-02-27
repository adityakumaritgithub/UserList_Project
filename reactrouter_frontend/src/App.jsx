import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './Navbar'
import AllUser from './AllUser'
import AddUser from './AddUser'
import EditUser from './EditUser'

function App() {
  const [count, setCount] = useState(0)

  return (
   
   <div>
    
 <BrowserRouter>
 <Navbar/>
    <Routes>
      <Route path='/' element={<AllUser/>} />
      <Route path='/AddUser' element={<AddUser/>}/>
      <Route path = '/edit-user/:id' element={<EditUser/>}/>
      
    </Routes>
 </BrowserRouter>
   </div>
  
  
  )
}

export default App
