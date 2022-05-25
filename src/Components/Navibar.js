import React from 'react';
import {useState} from 'react';
import Signup from './Signup.js';
import Login from './Login';


const Navibar = () =>{
    const  [show, setShow] = useState(false);
    const [login, setlogin] = useState(false)
    const [signup, setsignup] = useState(false)
  
    const loginmethod = () => {
      setlogin(true)
    }
    const signupmethod = () => {
      setsignup(true)
    }  
      
return(
<div>
    <section className="navbar-bg">
<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container">
    <a class="navbar-brand" href="#">Cotton Bridge</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
     data-bs-target="#navbarSupportedContent" 
     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
     onClick={() => setShow(!show)}>
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class={`collapse navbar-collapse ${show ? "show" : ""}`} 
    id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Are You a
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Farmer</a></li>
            <li><a class="dropdown-item" href="#">Mechanical Provider</a></li>
            <li><a class="dropdown-item" href="#">Other Supplier</a></li>
            <li><a class="dropdown-item" href="#">Public/Guest</a></li>
          </ul>
        </li>
      </ul>
        <button class="btn btn-style btn-style-border" type="submit" onClick={signupmethod}>Sign Up</button>
        <button class="btn btn-style"onClick={loginmethod}>Login</button>
        {signup && <Signup />}
              {login && <Login />}

    </div>
  </div>
</nav>
</section>
</div>)
}
export default Navibar;