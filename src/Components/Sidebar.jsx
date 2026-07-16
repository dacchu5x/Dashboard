import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { FaDove } from "react-icons/fa";
const Sidebar = () => {
   const activemenu = 'true'
  return (
<div className=' ml-3  pb-10  h-screen   md:overflow-hidden    overflow-auto   md:hover:overflow-auto  '>

{activemenu && (<>

<div className='flex content-between item-center'>
    <Link to="/"  className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white  text-slate-900' >
    
   <SiShopware size={35} /> <h1><h1>HELLO BRO 🚀</h1></h1>
    
    
    </Link>

</div>

</> )}

</div>
  )
}

export default Sidebar 
