import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Componement/Footer/Footer'
import Headers from './Componement/Header/Header'

function App() {


  return (
    <>
      <Headers />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
