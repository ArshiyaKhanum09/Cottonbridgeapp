import React from 'react';
import {useState} from 'react';
import Signup from './Signup.js';
import Login from './Login';
import Services from './Services';
import cottonlogo from '../images/cottonlogo.jpg';
import Abouts from './Abouts.js';
import { NavLink } from "react-router-dom";
import Mprovider from './Mprovider';
import supplier from './supplier';
import cotton1 from '../images/cotton1.jpg';
import cotton2 from '../images/cotton2.jpg';
import cotton3 from '../images/cotton3.jpg';
const Navibar = () =>{
    const [login, setlogin] = useState(false);
    const [signup, setsignup] = useState(false);
  
    const loginmethod = () => {
      setlogin(true)
    }
    const signupmethod = () => {
      setsignup(true)
    }  
      
return(
<header>
<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container">
    <a class="navbar-brand"><img src={cottonlogo} alt="image not supported" className="image-fluid" style={{width:'80%', margin:'auto 0 0 15%'}}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
     data-bs-target="#navbarSupportedContent" 
     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <NavLink class="nav-link active" aria-current="page" to="/">
                    Home
                  </NavLink>
        </li>
        <li class="nav-item">
        <NavLink class="nav-link" to="/HowitWorks">
                    Services
                  </NavLink>
        </li>
        <li class="nav-item">
        <NavLink class="nav-link" to="/Abouts">
                    About
                  </NavLink>        </li>
                  <li class="nav-item">
                  <NavLink class="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>

        <li class="nav-item dropdown text-primary">
          <a class="nav-link dropdown-toggle text-primary droplist" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Are You a
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink class="nav-link" to="/Farmerpage">Farmer</NavLink></li>
            <li><NavLink class="nav-link" to="/Mprovider">Mechanical Provider</NavLink></li>
            <li><NavLink class="nav-link" to="/supplier">Other Supplier</NavLink></li>
            <li><NavLink class="nav-link" to="/guest">Publi/Guest</NavLink></li>
          </ul>
        </li>
      </ul>
      <form action="post">
                <button class="btn btn-style btn-style-border" type="submit" onClick={signupmethod}>Sign Up</button>
                <button class="btn btn-style" onClick={loginmethod} >Login</button>
              </form>
              {signup && <Signup />}
              {login && <Login />}

    </div>
  </div>
</nav>
</header>
)
}
export default Navibar;