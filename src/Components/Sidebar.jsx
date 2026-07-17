import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider'; 


const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  

   const activemenu = 'true'
  return (
<div className=' ml-3  pb-10  h-screen   md:overflow-hidden    overflow-auto   md:hover:overflow-auto  '>

<div className='flex content-between item-center'>
    <Link to="/"  className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white  text-slate-900' >
    
   <SiShopware size={35} /> <span> Dashboard  </span>

    </Link>

                <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>



</div>

{  links.map(item)( 
    <div
    key = {links.title}
     className=' mt-5 Capitalized  '>

    <h1> {links.title} </h1>
     {  item.links.map(items) (  

      <NavLink 
       to={`\${items.name}`}
       key={items.name}
       className='mt-10 mb-10'
       onClick={ ()=>{}}
       style={(isActive)=> ({ background: isActive? currentColor: ""})} > 
       
       <p> {items.name}</p>
       
       </NavLink>






     )} 
    












</div>)}

</div>
  )
}

export default Sidebar 
