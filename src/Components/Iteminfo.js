import './Shop.css'
import {Items} from './Items'

import { useState } from 'react'
import './Iteminfo.css'
import{ Link }from 'react-router-dom'
const Iteminfo=({Item,setItem,Cart,setCart,Count,setCount})=>{
  
  
  const increment =()=>{
    setCount(++Count)

  }
  const decrement =()=>{
    if(Count===0){
      Count=0;
    }
    else{
    setCount(--Count)}

  }



  const addToCart = (product) => {
    let itemcount = Count
    let newCart = [...Cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity+=itemcount;
    } else {
      itemInCart = {
        ...product,
        quantity: itemcount,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
    setCount(0)
  };


  return(

  
  <div className='Iteminfo'>
    {Items.filter((val)=>{if(val.name===Item){return val}}).map((val,i)=>{
      return(
        
        <div key ={i}>
          <h1 className ='Iteminfo_Title'>{val.name}</h1>
          <img src ={val.image} height = '350' width = '350'></img>
          <p className ='Iteminfo_Description'>{val.info}</p>
          <p className ='Iteminfo_Price'>${val.price}</p>
            <div className ='Iteminfo_Counter'>
              
              
              <button onClick={decrement} className='Iteminfo_Counter_Button'>-</button>
              <p className='Iteminfo_Counter_Text'>{Count}</p>
              <button onClick={increment} className='Iteminfo_Counter_Button'>+</button>
            </div>
          <div>
          {Count>0?<Link to='/Tcart'><button onClick={()=>addToCart(val)} className='Iteminfo_Button'>Add to cart</button></Link>:''}
          
          <Link to ='/'><button className='Iteminfo_Button'>Back</button></Link>
          </div>
        </div>)})}

          <div>
          {Cart.filter((val)=>{if(val.name===Item){return val}}).map((val,i)=>{
            return(
              
              <div key ={i}>
                <h1>Current amount:{val.quantity}</h1>
              </div>)

            })}
          </div>
    </div>)}
  
  






export default Iteminfo