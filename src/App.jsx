import React from 'react'
import Header from './Component/Header'
import Sidebar from './Component/Sidebar'
import Main_div from './Component/Main_div'


function App() {
  return (
    <div className='bg-[#F7F6F4] h-[100vh] w-full'>
      <Header/>
      <Sidebar/>
      <Main_div/>
      
      
    </div>
  )
}

export default App