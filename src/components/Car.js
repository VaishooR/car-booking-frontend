import React,{useState} from 'react';
import './Car.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

const Car = ({cardata,fromdate,todate}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div className="eachcar-card" >
        <div style={{display: 'flex',justifyContent: 'center'}}>
            <img  src={cardata.imageurl}/>
        </div>
        <div className="car-details">
                <div style={{fontSize:'20px',color:'rgb(35, 35, 117)'}}>{cardata.carname}</div>
                <div style={{display:"flex",justifyContent:"space-between",marginTop:'8px',padding:'0px 22px'}}>
                
                   <div><b>Rs {cardata.rentperhour}</b> / day</div> 
                   <div>{cardata.maxcount} persons</div>

                </div>
                <div style={{display: 'flex',justifyContent: 'space-between',alignItems: 'center',marginTop:'10px',padding:'0px 20px'}}>
                    <button type="button" class="btn btn-secondary" className="viewdetails" onClick={handleShow}>View details</button>
                    {(fromdate && todate) ? (
                      <Link to={`/book/${cardata._id}/${fromdate}/${todate}`}><button type="button" className="booknow"  >Book Now</button></Link>
                    ):(
                      <Link to={`/book/${cardata._id}/${fromdate}/${todate}`}><button type="button" className="notbook" disabled >Book Now</button></Link>
                    )}
                    
                    
                </div>
        </div>
        
        <Modal size='xl' style={{marginTop:'12vh'}} show={show} onHide={handleClose}>
        
        <Modal.Header closeButton>
          <Modal.Title style={{color:"rgb(53, 53, 147)"}}>{cardata.carname}</Modal.Title>
        </Modal.Header>

        <Modal.Body >
            <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
                <div style={{marginTop:'0px',display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
                    <img src={cardata.imageurl}/>
                </div>
                <div style={{display:'flex',flexDirection:'column',justifyContent: 'center'}}>
                    <div style={{display:'flex'}} className='fulldetails'>
                        {/* <div>{cardata.district}</div> */}
                        <div>Rs {cardata.rentperhour}/day</div>
                        <div>{cardata.maxcount} persons</div>
                        <div>{cardata.petroldisel}</div>
                    </div>
                    <div style={{padding:'0px 50px',marginTop:'20px',color:'grey',textAlign:'justify'}}>{cardata.description}</div>

                </div>
            </div>   
        </Modal.Body>
        
      </Modal>
     

    </div>
  )
}

export default Car