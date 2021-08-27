import logo from './logo.svg';
import './App.css';
import Shop from './Components/Shop';
import Nav from './Components/Nav'
import About from './Components/About'
import Tcart from './Components/Tcart';
import { useState } from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext'
import {Link} from 'react-router-dom'
import Signup from './Components/Signup';
import ForgotPassword from './Components/ForgotPassword';
import PrivateRoute from './Components/PrivateRoute';
import UpdateProfile from "./Components/UpdateProfile"
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import context from 'react-bootstrap/esm/AccordionContext';
import StripeContainer from './Stripepayment/StripeContainer';
import Iteminfo from './Components/Iteminfo';

function App() {

  const [Cart, setCart] = useState([]);
  const [Item, setItem] = useState('');
  const [Logged,setLoggedin] = useState(false);
  const [Count,setCount] = useState(0);
  const [Price,setPrice] = useState(0);
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <h1>hi</h1>
          <div className ='App_Nav'>
          </div>
          <h1 className ='App_Title'>FITNESSEXPRESS</h1>
          <div className='App_Nav_Items'>
          <Nav></Nav>
          </div>
          <div className='App_Shopcontainer'>
            <Switch>
              <Route exact path ='/'>
              <Shop Item={Item} setItem={setItem} Cart={Cart} setCart={setCart}></Shop>
              </Route>
              <Route path ='/About'>
                <About></About>
              </Route>

              <Route path = '/Tcart'>
              <Tcart Cart={Cart} setCart={setCart} Logged={Logged} setLoggedin={setLoggedin} Price={Price} setPrice={setPrice}></Tcart>
              </Route>
              <Route path ='/Iteminfo'>
                <Iteminfo Cart ={Cart} setCart ={setCart} Item={Item} setItem={setItem} Count={Count} setCount={setCount}></Iteminfo>
              </Route>
              <div className='App_Authentication'>
                <PrivateRoute exact path="/">
                  <Dashboard></Dashboard>
                </PrivateRoute>
                <PrivateRoute path="/update-profile">
                  <UpdateProfile></UpdateProfile>
                </PrivateRoute>
                <Route path="/signup">
                  <Signup></Signup>
                </Route>
                <Route path="/login">
                  <Login Logged={Logged} setLoggedin={setLoggedin}></Login>
                </Route>
                <Route path="/forgot-password">
                  <ForgotPassword></ForgotPassword>
                </Route>
                
                <Route path ='/Stripe'>
                <StripeContainer Price={Price} setPrice={setPrice}></StripeContainer>
                </Route>
                </div>
            </Switch>
            <p className='App_footer'>Liscence</p>
            </div>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
