import React from 'react';
import {Link} from 'react-router-dom'
import './Tcart.css'
function Tcart({ Cart, setCart,Logged,setLoggedin,Price,setPrice }) {
  
  const getTotalSum = () => {

    Price = Cart.reduce(
      (sum, { price, quantity }) => sum + price * quantity,
      0
    );
    return Price
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(
      Cart.filter((product) => product !== productToRemove)
    );
  };

  return (
    <div className='Tcart'>
      <h1>Cart</h1>
      {Cart.length> 0?
        <button  className='Tcart_Button' onClick={clearCart}>Clear Cart</button>:
      <p>Your cart is empty!!</p>}
      <div>
        {Cart.map((product, idx) => (
          <div  key={idx}>
            <h3>{product.name}</h3>
            <h4>${product.price}</h4>
            
            <h1>{product.quantity}</h1>
            
            <img src={product.image} alt={product.name} />
            <button className ='Tcart_Button' onClick={() => removeFromCart(product)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <Link to ='/'><button className='Tcart_Button'>continue shopping</button></Link>
      <div>Total Cost: ${getTotalSum()}</div>
      {Logged?<Link to ='/Stripe'><button className='Tcart_Button'>purchase</button></Link>:
        <Link to ='/login'><button className='Tcart_Button'>Login/signup to purchase!</button></Link>}
      
      
    </div>
  );
}

export default Tcart