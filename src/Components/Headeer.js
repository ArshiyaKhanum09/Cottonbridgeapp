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
        <h2 className="display-3">Vision/Mission</h2>
        <p className="main-hero-para">To create organised platform in cotton sector to Farmers, Ginners, Spinners Enabling optimized Supply chain & services with End to End solution.</p>
        <p className="main-hero-para">We will establish Systematic Approach to overall process from Farmer to cotton Mills in India. Will simplify the overall Process by using User Interface.</p>
        <button className="btn btn-success" type="submit">Find Out More...</button>

    </div>
<div className="col-12 col-lg-6 header-right-side 
d-flex justify-content-center align-items-center main-herosection-images" >
<img src={farmertoretail} alt="image not supported" className="image-fluid" style={{width:'80%', margin:'auto 0 0 15%'}}/>
<img src={mainimage} alt="image not supported" className="image-fluid main-hero-img2" style={{width:'80%', margin:'auto 0 0 15%'}}/>
</div>
</div>
</section>
    </header>
    );
} 
export default Headeer;


// style={{width:'60%', margin:'auto 0 0 15%'}} 