import { useState ,useEffect } from 'react'
import { BrowserRouter , Route , Routes } from "react-router-dom";
import { FiNavigation2, FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-react-popups/styles/material.css';
import './App.css'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Ecommerce} from './Pages'

const App = () => {
  const currentMode = "darker"
  const [avtivemenu , set] = useState(true)
  return (
    <div className={currentMode ==='dark'?"dark":""} >
      <BrowserRouter>
      <div className=' flex relative  dark:bg-main-dark-bg'>

<div className='fixed  bottom-4 right-4'> 
      <TooltipComponent
  content="Settings"
  position="Top">
 
  <button className="bg-red-500 p-4 rounded-full text-xl text-white" style={{zindex:999999}}>
    <FiSettings />
  </button>

</TooltipComponent> </div> 

{avtivemenu ?( <div className='fixed w-72 h-screen sidebar bg-red-500 dark:bg-secondary-dark-bg' > 
  <Sidebar/>
</div> 
):( <div className='fixed w-0 h-screen  bg-white ' > 
  <Navbar/>
</div> 
)}
   
  <div
            className={
              avtivemenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-orange-500 dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
 <div>
            

              <Routes>
              
                <Route path="/" element={(<Ecommerce />)} />
                <Route path="/ecommerce" element={(<Ecommerce />)} />

               

              </Routes>
             </div>



  </div>

      </div>
 
      </BrowserRouter>
    </div>
  )
}


export default App
