import React from 'react';
import './PageThree.css'

const PageThree = () => {
  return (
    <div className="page-three">
        <div className="p3-content">
            <div className="p3-line1">Save big with our cheap car rental!</div>
            <div className="p3-line2">Top Airports | Local Suppliers | <span style={{color:"gold"}}>24/7</span> Support</div>
        </div>
        <div style={{display:"flex",justifyContent:"center",paddingTop:'20px'}}>
            <img src="/assets/many-cars.png"/>
        </div>
        
    </div>
  )
}

export default PageThree