import React from 'react'
import hero1 from './Asserts/images/hero1.png'
import hero2 from "./Asserts/images/hero2.png";
import hero3 from "./Asserts/images/hero3.png";
const Hero = () => {
  return (
   <section className='hero'>
<div className="container-fluid">
<div className="row text-center ">
    <div className="col-sm-12 col-md-3 position-relative">
        <img src={hero1} alt="" className='img-fluid'  />

        <h3>Shop now</h3>
    </div>
    <div className="col-sm-12 col-md-6 position-relative mt-5 mt-md-0">
        <img src={hero2} alt="" className='img-fluid'    />
        <h3>Shop now</h3>

    </div>
    <div className="col-sm-12 col-md-3 position-relative mt-5 mt-md-0">
        <img src={hero3} alt="" className='img-fluid'   />
        <h3>Shop now</h3>

    </div>
</div>
</div>

   </section>
  )
}

export default Hero