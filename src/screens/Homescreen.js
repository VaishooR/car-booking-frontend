import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {setfromdate,settodate} from '../redux/dateSlice';
import axios from "axios";
import Car from '../components/Car';
import './Homescreen.css';
import Loader from '../components/Loader';
import moment from 'moment';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;




const Homescreen = () => {
    const[cars,setcars]=useState([])
    const[loading,setloading]=useState()
    const[error,seterror]=useState()
    const[fromdate,setfromdate]=useState()
    const[todate,settodate]=useState()
    const[duplicatecars,setduplicatecars]=useState([])

    // console.log(duplicatecars)

    

   

    useEffect(() => {
        async function fetchData(){
            try{
                setloading(true)
                const data= (await axios.get('/api/cars/getallcars')).data
                // console.log('cars data list is...',data)
                setcars(data);
                setduplicatecars(data);
                setloading(false)
            }catch(error){
                seterror(true)
                console.log(error.message)
                setloading(false)
            }
        }
        fetchData()    
    },[])

    function filterByDate(dates)
    {
      // console.log(moment(dates[0].$d).format('DD-MM-YYYY'))
      // console.log(moment(dates[1].$d).format('DD-MM-YYYY'))
      // setfromdate(moment(dates[0].$d).format('DD-MM-YYYY'))
      // settodate(moment(dates[1].$d).format('DD-MM-YYYY'))
      const from = moment(dates[0].$d).format('DD-MM-YYYY');
      const to = moment(dates[1].$d).format('DD-MM-YYYY');
      setfromdate(from)
      settodate(to)

      var tempcars=[]
      var availability = false;
     
      
      
    }
  return (
    <div className="homescreen">

      <div>
      <RangePicker format='DD-MM-YYYY' onChange={filterByDate}/> 
      </div>
        
        <div className='homescreen-cars'>
          {loading?(<h1><Loader/></h1>):(
          cars.map((eachcar,index)=>{
            return <Car key={index} cardata={eachcar} fromdate={fromdate} todate={todate}/>
          }))}
        </div>
      
    </div>
    
  )
}

export default Homescreen



// for(const car of duplicatecars){
//   if(car.currentbookings.length > 0){
//     for(const booking of car.currentbookings){
//       if(!moment(moment(dates[0]).format('DD-MM-YYYY')).isBetween(booking.fromdate,booking.todate)
//       && !moment(moment(dates[1]).format('DD-MM-YYYY')).isBetween(booking.fromdate,booking.todate)
//       ){
//         if(
//           moment(dates[0]).format('DD-MM-YYYY') !== booking.fromdate &&
//           moment(dates[0]).format('DD-MM-YYYY') !== booking.todate &&
//           moment(dates[1]).format('DD-MM-YYYY') !== booking.fromdate &&
//           moment(dates[1]).format('DD-MM-YYYY') !== booking.todate 
//         ){
//           availability = true
//         }
//       }
//     }
//   }
//   if(availability==true || car.currentbookings.length==0)
//   {
//     tempcars.push(car)
//   }
//   setcars(tempcars)
// }










 // const fromdate= useSelector((state)=>state.date.fromdate)
    // const todate= useSelector((state)=>state.date.todate)
    // const dispatch= useDispatch();
    // console.log('HOME FROMdate.......',fromdate)
    // console.log('HOME TOdate.......',todate)

// dispatch(setfromdate(from))
      // dispatch(settodate(to))