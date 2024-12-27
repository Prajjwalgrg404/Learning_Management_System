import React from 'react'
import Header from './Component/Header'
import Sidebar from './Component/Sidebar'
import Batch from './Component/Batch'
import { Routes, Route } from'react-router-dom'

function App() {
  return (
    <div className='bg-[#F7F6F4] h-[100vh] w-full'>
      <Header/>
      <Sidebar/>
      <Batch/>
      <Routes>
        <Route path="/batch" element={<Batch/>}/>
      </Routes>
      
    </div>
  )
}

export default App