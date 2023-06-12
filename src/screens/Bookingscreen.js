import React,{useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import './Bookingscreen.css';
import { useSelector,useDispatch } from 'react-redux';

import moment from 'moment';



const Bookingscreen = ({match}) => {
    const[loading,setloading]=useState(true)
    const[car,setcar]=useState()
console.log('carrrrrr',car)
    let params = useParams();
    let {fromdate,todate}=useParams();
    const carid=params.carid;
    const dayone=moment(fromdate,'DD-MM-YYYY')
    const daytwo=moment(todate,'DD-MM-YYYY')
    const totaldays=moment.duration(daytwo.diff(dayone)).asDays()+1
    const totalamount=totaldays*car?.rentperhour
   
    // const fromdate= useSelector((state)=>state.date.fromdate)
    // const todate= useSelector((state)=>state.date.todate)

    useEffect(()=>{
        async function fetchData(){
            try{
                setloading(true)
                const data= (await axios.post('/api/cars/getcarbyid',{carid:params.carid})).data
                // const data= (await axios.post(`/api/cars/${carid}`)).data

                console.log('One car detail is...',data)
                setcar(data);
                setloading(false)
            }catch(error){
                console.log(error)
            }
        }
        fetchData() 
    },[])

    // async function bookRoom(){
    //      const bookingDetails={
    //         car,
    //         userid:JSON.parse(localStorage.getItem('currentUser'))._id,
    //         username:JSON.parse(localStorage.getItem('currentUser')).name,
    //         fromdate,
    //         todate,
    //         totalamount,
    //         totaldays
    //      }
    //      try{
    //         const result= await axios.post('/api/bookings/bookroom',bookingDetails)
    //      }catch(error){

    //      }
    // }

  return (
    <div className="bookingpage-screen" style={{display: 'flex',alignItems: 'center',justifyContent: 'center',height:'90vh'}}>
        <div className='bookingpage-card'>
           <div>
              <img src={car?.imageurl}/>
           </div>
           <div className='booking-content'>
              <p style={{textDecoration:'underline'}}><b>BOOKING DETAILS</b></p>
              {/* <div style={{display:'flex'}}><div style={{width:'150px',color:'goldenrod'}}>Name : </div>{JSON.parse(localStorage.getItem('currentUser')).name}</div> */}
              <div style={{display:'flex'}}><div style={{width:'150px',color:'goldenrod'}}>Car : </div>{car?.carname}</div>
              <div style={{display:'flex'}}><div style={{width:'150px',color:'goldenrod'}}>Count : </div>{car?.maxcount} persons</div>

              <div style={{display:'flex'}}><div style={{width:'150px',color:'goldenrod'}}>From : </div> {params.fromdate!=='undefined'?<b>{params.fromdate}</b>:<div style={{color:'red',fontSize:'13px'}}>* Please select from-date</div>}  </div>
              <div style={{display:'flex'}}><div style={{width:'150px',color:'goldenrod'}}>To : </div> {params.todate!=='undefined'?<b>{params.todate}</b>:<div style={{color:'red',fontSize:'13px'}}>* Please select to-date</div>} </div>
              <br/>
              <p style={{textDecoration:'underline'}}><b>AMOUNT</b></p>
              <div style={{display:'flex'}}><div style={{width:'150px',color:'goldenrod'}}>Total days :</div>  {totaldays?totaldays:"0 days"}</div>
              <div style={{display:'flex'}}><div style={{width:'150px',color:'goldenrod'}}>Rent per day :</div> Rs {car?.rentperhour}</div>
              <br/>
              <p style={{display:'flex'}}><div style={{width:'150px'}}><b>TOTAL AMOUNT:</b></div> {totalamount?<b> Rs {totalamount}</b>:"Rs 0"}</p>
              <button className='confirm-btn' >Confirm Booking</button>
           </div>
        </div>

    </div>
    
  )
}

export default Bookingscreen