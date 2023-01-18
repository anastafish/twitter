import { useState } from 'react'
import './App.css'
import SideBar from './componenets/sidebar'
import Main from './componenets/main'
import RightSideBar from './componenets/right-sidebar'



function App(props) {
  return (
    <div className="App">
      <SideBar className="sidebar" app={props.app} getAuth={props.getAuth}/>
      <Main db={props.db} app={props.app} getAuth={props.getAuth}/>
      <RightSideBar app={props.app} getAuth={props.getAuth}/>      
    </div>
  )
}

export default App
