import './Navbar.css';
import { FaCarAlt } from "react-icons/fa";
import {Link} from "react-router-dom";


function Navbar() {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  function logout(){
    localStorage.removeItem('currentUser');
    window.location.href='/login'
  }
  return (
    <div className="navbar">
      <Link to="/"><h4 style={{marginTop:'10px',cursor:'pointer'}}><FaCarAlt style={{fontSize:'30px'}}/> &nbsp;&nbsp;&nbsp;CAR &nbsp;&nbsp;<span style={{color:'gold'}}>REN</span>TAL</h4></Link>
      
      {user ? (
        <div className="btn-group">
        <div type="button" className=" dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <span style={{color:'gold',marginRight:'10px'}}><span>Hello</span> {user.name}</span>
        </div>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="/register">Bookings</a></li>
          <li><a className="dropdown-item" href="/login" onClick={logout}>Logout</a></li>
        </ul>
      </div>
      ):(
          <div>
          <Link to="/login" style={{color:'gold',cursor:'pointer',marginRight:'30px'}}>Login</Link>
          <Link to="/register" style={{color:'gold',cursor:'pointer'}}>Register</Link>
          </div>
      )} 
      
                  {/* <h5 style={{color:'gold'}}><span>Hello</span> {user.name}</h5> */}

      
      
    </div>
  )
}

export default Navbar





{/* <h3 style={{marginTop:'4px',color:'gold'}}><FaCarAlt/> &nbsp;&nbsp;&nbsp;Car Rentals</h3>
<div style={{display: 'flex',justifyContent: 'space-between',cursor:'pointer',fontSize:'17px',color:'gold'}}>
<h4><Link to="/login">Login</Link></h4>&nbsp;&nbsp;&nbsp;&nbsp;
    <h4>Register</h4>
</div> */}