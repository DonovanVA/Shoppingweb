import './Nav.css'
import * as FaIcons from 'react-icons'
import { IconContext } from 'react-icons'
import Tcart from './Tcart.js'
import { Link } from 'react-router-dom'
const Nav =()=>{

return(


    <div className='Nav'>
        
        
        <Link to ='/'><h1 className = 'Nav_button'>Home</h1></Link>
        <Link to ='/About'><h1 className = 'Nav_button'>About</h1></Link>
        <Link to ='/Tcart'><h1 className = 'Nav_button'>View Cart</h1></Link>
        <Link to ='/login'><h1 className ='Nav_Signup'>Login/Signup</h1></Link>

    </div>
)



}

export default Nav