import React from 'react';
import './PageFive.css';
import {FaCarAlt}  from "react-icons/fa";
import {AiOutlineMail,AiOutlinePhone,AiOutlineInstagram,AiOutlineCar} from "react-icons/ai";
import {SlLocationPin} from "react-icons/sl";
import {FiTwitter} from "react-icons/fi";
import {CiFacebook} from "react-icons/ci";


const PageFive = () => {
  return (
    <div className="page-five">
        <div>
            <p style={{textAlign: 'center'}}><b>Rental Cities</b></p>
            <div><AiOutlineCar style={{color:'gold',marginRight:'10px'}}/>Car rental in Chennai</div>
            <div><AiOutlineCar style={{color:'gold',marginRight:'10px'}}/>Car rental in Bangalore</div>
            <div><AiOutlineCar style={{color:'gold',marginRight:'10px'}}/>Car rental in Hyderabad</div>
            <div><AiOutlineCar style={{color:'gold',marginRight:'10px'}}/>Car rental in Kochi</div>
            <div><AiOutlineCar style={{color:'gold',marginRight:'10px'}}/>Car rental in Mysore</div>
            <div><AiOutlineCar style={{color:'gold',marginRight:'10px'}}/>Car rental in Vizag</div>
        </div>

        <div>
            <p><b>Follow us on</b></p>
            <div><CiFacebook style={{color:'gold',marginRight:'10px',fontSize:'18px'}}/>Facebook</div>
            <div><FiTwitter style={{color:'gold',marginRight:'10px'}}/>Twitter</div>
            <div><AiOutlineInstagram style={{color:'gold',marginRight:'10px'}}/>Instagram</div>
        </div>
        
        <div>
            <p style={{textAlign:'center'}}><b>Get in touch</b></p>
            <div><AiOutlineMail style={{color:'gold',marginRight:'10px'}}/>104, Car Motor Company,<br/>&nbsp;&nbsp; Anna Nagar, Chennai, 60006</div>
            <div><AiOutlinePhone style={{color:'gold',marginRight:'10px'}}/>support@indusgo.in</div>
            <div><SlLocationPin style={{color:'gold',marginRight:'10px'}}/>+91 983638392295</div>
        </div>
        
        <div>
            <p><b>Helpful links</b></p>
            <div>Home</div>
            <div>Blog</div>
            <div>Privacy policy</div>
            <div>FAQs</div>
            <div>Contact Us</div>
            <div>About Us</div>
            <div>Terms of Use</div>
        </div>
    </div>
  )
}

export default PageFive