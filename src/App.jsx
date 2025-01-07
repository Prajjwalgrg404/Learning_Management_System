import React from 'react'
import Header from './Component/Header'
import Sidebar from './Component/Sidebar'
import Main_div from './Component/Main_div'

function App() {
  return (
    <div className='bg-[#F7F6F4] h-screen w-full overflow-hidden'>
      <Header/>
      <Sidebar/>
      <Main_div/>
      
      
    </div>
  )
}

export default App