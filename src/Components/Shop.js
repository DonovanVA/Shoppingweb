import './Shop.css'
import {Items} from './Items'
import Iteminfo from './Iteminfo'
import { Link } from 'react-router-dom'
const Shop =({Item,setItem,Cart,setCart})=>{
  const toggle=()=>{

    var blur = document.getElementById('blur')
    blur.classList.toggle('active')
    var popup = document.getElementById('popup')
    popup.classList.toggle('active')
}
const Showitem =(Name)=>{
  setItem(Name)
  
}


return(
    
      <div className='Shop' id ='blur'>
        <h1 className='Shop_Header'>A FITTER tomorrow starts today!!</h1>
        {Items.map((item,i)=>{
            return(
                <div className = 'Shop_Items' key={i}>
                    <h1 className='Shop_Items_Title'>{item.name}</h1>
                    <img src={item.image} width = '350' height = '350'></img>
                    <p className='Shop_Items_Price'>${item.price}</p>
                    <Link to ='/Iteminfo'>
                      <button 
                      onClick={()=>Showitem(item.name)}
                      className='Shop_Button'>
                      Info</button>
                    </Link>
                </div>

                )
            }
        )}
        </div>
)


}

export default Shop