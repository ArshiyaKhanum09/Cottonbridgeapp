import React from 'react';
import farmertoretail from '../images/farmertoretail.jpg';
import mainimage from '../images/mainimage.jpg';

const Headeer = () =>
{
    return(
<header>
<section className="container main-hero-container">
<div className="row">
    <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start">
        <h1 className="display-3">Reimagining the future for supply chains</h1>
        <p className="main-hero-para">We help global brands source more fairly and sustainably by creating more robust, resilient and successful raw material supply chains.</p>
        <h3>Get early access now</h3>
        <button className="btn btn-success" type="submit">Find Out More...</button>

    </div>
<div className="col-12 col-lg-6 header-right-side 
d-flex justify-content-center align-items-center main-herosection-images" >
<img src={farmertoretail} alt="image not supported" className="image-fluid"/>
<img src={mainimage} alt="image not supported" className="image-fluid main-hero-img2"/>
</div>
</div>
</section>
    </header>
    );
} 
export default Headeer;


// style={{width:'60%', margin:'auto 0 0 15%'}} 