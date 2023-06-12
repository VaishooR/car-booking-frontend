import React from 'react';
import './PageTwo.css';
import {BsArrowRight}  from "react-icons/bs";
import {SlCalender}  from "react-icons/sl";
import {FaCarAlt}  from "react-icons/fa";
import {HiUserGroup}  from "react-icons/hi";
import {BsEmojiSmileFill}  from "react-icons/bs";







const PageTwo = () => {
  return (
    <div className="pageTwo">
        <h4 className="pageTwo-title">How it works?</h4>
        <div className='pageTwo-rounds'>
        <div className='one-circle'>
            <div className="x_icon"><SlCalender style={{fontSize:'40px'}}/></div>
            <h5><span>1. </span> BOOK YOUR CAR</h5>
            <p style={{color:'goldenrod'}}>Make your advance reservation by call us using our Live Support.</p>
        </div>
        <BsArrowRight style={{color:'#201D54',fontSize:'40px'}}/>
        <div className='one-circle'>
            <div className="x_icon"><FaCarAlt style={{fontSize:'40px'}}/></div>
            <h5><span>2. </span> PICK UP THE CAR</h5>
            <p style={{color:'goldenrod'}}>Get your vehicle at our pick up point or get delivered to your door step.</p>
        </div>
        <BsArrowRight style={{color:'#201D54',fontSize:'40px'}}/>
        <div className='one-circle'>
            <div className="x_icon"><HiUserGroup style={{fontSize:'40px'}}/></div>
            <h5><span>3. </span> DRIVE YOURSELF</h5>
            <p style={{color:'goldenrod'}}>Drive the car with your family and friends and enjoy your memorable moments.</p>
        </div>
        <BsArrowRight style={{color:'#201D54',fontSize:'40px'}}/>
        <div className='one-circle'>
            <div className="x_icon"><BsEmojiSmileFill style={{fontSize:'40px'}}/></div>
            <h5><span>4. </span> ENJOY YOUR TRIP</h5>
            <p style={{color:'goldenrod'}}>Have a fulfilling journey filled with joy and happiness. Happy Journey.</p>
        </div>
        </div>
    </div>
  )
}

export default PageTwo