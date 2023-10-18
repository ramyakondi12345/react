
import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
// import DoughnutChart from './DoughnutChart'
// import ProductTable from './ProductTable'
function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
     
      <Home />
    {/* <DoughnutChart/> */}
    {/* <ProductTable/> */}
    
   
   
    
      
    </div>
  )
}

export default App