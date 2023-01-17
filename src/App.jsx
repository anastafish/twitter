import { useState } from 'react'
import './App.css'
import SideBar from './componenets/sidebar'
import Main from './componenets/main'
import RightSideBar from './componenets/right-sidebar'



function App() {
  return (
    <div className="App">
      <SideBar/>
      <Main/>
      <RightSideBar/>      
    </div>
  )
}

export default App
