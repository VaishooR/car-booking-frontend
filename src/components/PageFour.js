import React from 'react';
import './PageFour.css';
import {BsEmojiSmileFill}  from "react-icons/bs";


const PageFour = () => {
  return (
    <div className='page-four'>
        <div className='pageFour-title'>What our Clients Say About Us?</div>
        <div style={{display:'flex',justifyContent: 'center'}}><BsEmojiSmileFill style={{fontSize:'25px',color:"gold"}}/></div>
        
        <p style={{color:'grey',padding:'10px 60px',textAlign:'center'}}>Discover the positive impact we've made on the our clients by reading through their testimonials.<br/> Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
        <div className='testimon'>
            <div className='testimon-card'>
                <p>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "</p>
                <div style={{display: 'flex',alignItems:'center'}}>
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" width='60px' height='60px' style={{borderRadius:'50%',marginRight:'20px'}}/>
                    <div style={{color:'goldenrod'}} >
                        <div>Vince Veras</div>
                        <div>Chennai</div>
                    </div>
                    <img src="https://images.squarespace-cdn.com/content/v1/642c41c4bc88676b4a8dbe8a/5515d91e-61b0-47f3-9ed4-3733b819f80f/noun-quote-4763643-D19C33.png?format=750w" width='80px' height='60px' style={{marginLeft:'35px',transform:'scale(1.4)'}}/>
                </div>
            </div>
            <div className='testimon-card'>
                <p>"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"</p>
                <div style={{display: 'flex',alignItems:'center'}}>
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" width='60px' height='60px' style={{borderRadius:'50%',marginRight:'20px'}}/>
                    <div style={{color:'goldenrod'}}>
                        <div>John Joseph</div>
                        <div>Bangalore</div>
                    </div>
                    <img src="https://images.squarespace-cdn.com/content/v1/642c41c4bc88676b4a8dbe8a/5515d91e-61b0-47f3-9ed4-3733b819f80f/noun-quote-4763643-D19C33.png?format=750w" width='80px' height='60px' style={{marginLeft:'35px',transform:'scale(1.4)'}}/>
                </div>
            </div>
            <div className='testimon-card'>
                <p>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "</p>
                <div style={{display: 'flex',alignItems:'center'}}>
                    <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" width='60px' height='60px' style={{borderRadius:'50%',marginRight:'20px'}}/>
                    <div style={{color:'goldenrod'}}>
                        <div>Ron Rizzly</div>
                        <div>Delhi</div>
                    </div>
                    <img src="https://images.squarespace-cdn.com/content/v1/642c41c4bc88676b4a8dbe8a/5515d91e-61b0-47f3-9ed4-3733b819f80f/noun-quote-4763643-D19C33.png?format=750w" width='80px' height='60px' style={{marginLeft:'55px',transform:'scale(1.4)'}}/>
                </div>
            </div>
            <div>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default PageFour