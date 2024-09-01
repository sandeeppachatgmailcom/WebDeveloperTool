import { Outlet } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Header from './components/common/header'
import MenuBar from './components/common/MenuBar/MenuBar'

function App() {
  return (

    <div className='w-full h-screen  '>
      <div className='h-[10%] '>
        <Header/>
      </div>
      <div className='h-[80%]'>
        <Outlet />
      </div>
      <div className='h-[10%] '>
        <MenuBar/>
      </div>


    </div>

  )
}

export default App
