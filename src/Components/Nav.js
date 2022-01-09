import './Nav.css'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { IconContext } from 'react-icons'
import Tcart from './Tcart.js'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Nav =()=>{

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);


return(
<div>
    <div className='Nav'>
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='Navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'Nav-menu active' : 'Nav-menu'}>
          <ul className='Nav-menu-items' onClick={showSidebar}>
            <li className='Navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <div className='Nav_buttons'>
            <Link to ='/'><button className = 'Nav_button_menu'>Home</button></Link>
            <Link to ='/About'><button className = 'Nav_button_menu'>About</button></Link>
            <Link to ='/Tcart'><button className = 'Nav_button_menu'>View Cart</button></Link>
            <Link to ='/login'><button className ='Nav_button_menu'>Account/Signup</button></Link>
            </div>
             
          </ul>
        </nav>
      </IconContext.Provider>
    </>
        <Link to ='/'><button className = 'Nav_button'>Home</button></Link>
        <Link to ='/About'><button className = 'Nav_button'>About</button></Link>
        <Link to ='/Tcart'><button className = 'Nav_button'>View Cart</button></Link>
        <Link to ='/login'><button className ='Nav_Signup'>Account/Signup</button></Link>
        
    </div>
   

</div>
)



}

export default Nav