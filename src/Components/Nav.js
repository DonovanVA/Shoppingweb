import './Nav.css'
import * as FaIcons from 'react-icons'
import { IconContext } from 'react-icons'
import Tcart from './Tcart.js'
import { Link } from 'react-router-dom'
const Nav =()=>{

return(


    <div className='Nav'>
        
        
        <Link to ='/'><button className = 'Nav_button'>Home</button></Link>
        <Link to ='/About'><button className = 'Nav_button'>About</button></Link>
        <Link to ='/Tcart'><button className = 'Nav_button'>View Cart</button></Link>
        <Link to ='/login'><button className ='Nav_Signup'>Login/Signup</button></Link>

    </div>
)



}

export default Nav