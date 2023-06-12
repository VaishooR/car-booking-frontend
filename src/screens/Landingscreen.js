import React from 'react';
import './Landingscreen.css';
import PageTwo from '../components/PageTwo';
import PageThree from '../components/PageThree';
import PageFour from '../components/PageFour';
import PageFive from '../components/PageFive';
import Footer from '../components/Footer';
import {Link} from "react-router-dom";


const Landingscreen = () => {
  return (
    <div>
    <div className='landing-screen'>
      <div className='landing-left'>
        <div className='landing-line1'>Plan your trip now</div>
        <div className='landing-line2'>Save <span style={{color:'goldenrod'}}>big</span> with our</div>
        <div className='landing-line3'>car rental</div>
        <p className='landing-line4'>Rent the car of your dreams. Unbeatable prices, unlimited miles, <br/>flexible pick-up options and much more.</p>
        <Link to="/home"><button className='plan-wheels'>Pick Your Wheels</button></Link>
        

      </div>

      <div className='landing-right'>
        <div className='landing-bgimage'><img src="/assets/street1.jpg"/></div>
        <div className='landing-carimage'><img src="/assets/blue-car.png"/></div>
      </div>
    </div>
    <PageTwo/>
    <PageThree/>
    <PageFour/>
    <PageFive/>
    <Footer/>
    </div>
    
  )
}

export default Landingscreen