import React,{useState} from 'react'
import workapi from './workapi';
const HowitWorks = () =>
{
    const [workdata, setworkdata] = useState(workapi);
    console.log(workdata);
    return (
              
    <section>
        <div className="work-container container">
<h1 className="main-heading">Our Services</h1>
<h4>We at C.B.I are enabling UI support for cotton supply chain from farmers to ginning &amp; spinning mills.
We established in 2013 march, since than we were trading cotton and gained immense experience encountered with some practical problems in the sector. Now we are planning to go on venture to bridge cotton from farmers to ginners and spinners. Our services and programmes include:</h4>
<div className="row">
    {workdata.map((curElem) => {
            const {id,logo,title,info} = curElem;
            return (
                <>
    <div className="col-12 col-lg-4 text-c
    enter work-container-subdiv">
    <i class={`fontawesome-style ${logo}`}></i>
        <h2 className="sub-heading">{title}</h2>
    <p className="main-hero-para w-100">{info}</p>
    </div>

                </>
            )
    })}
</div>
        </div>
        
        </section>
        
        )
}

export default HowitWorks;