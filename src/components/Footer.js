import React from 'react'
import './Footer.css';
import {BsEmojiSmileFill}  from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      Designed & Built by Vaishoo <BsEmojiSmileFill style={{fontSize:'15px',color:"goldenrod",marginLeft:'10px'}}/>
    </div>
  )
}

export default Footer