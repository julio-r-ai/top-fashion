import './App.css'
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Header/>
      <Outlet />   
      <Sidebar/>
    </div>  
  )
}

export default App
