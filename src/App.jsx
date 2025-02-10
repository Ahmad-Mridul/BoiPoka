import { Outlet } from 'react-router'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

function App() {

  return (
    <div className='max-w-6xl mx-auto'>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
