import { createSlice } from "@reduxjs/toolkit";
import moment from 'moment';

const dateSlice=createSlice({
    name:"date",
    initialState:{
        fromdate:'Enter FROMDATE',
        todate:'Enter TODATE',
    },
    reducers:{
        setfromdate:(state,action)=>{
            state.fromdate = action.payload;
        },
        settodate:(state,action)=>{
            state.todate = action.payload;
        },
        // settodate:(state,action)=>{
        //     state.value = action.payload;
        // },


        // addItem:(state,action)=>{
        //     state.items.push({...action.payload,qty:1})
        // },
        // removeItem:(state,action)=>{
            // state.items.pop()  
        //     state.items=state.items.filter(item=>item.id!==action.payload.id)
        // },
        // clearCart:(state)=>{
        //     state.items=[]
        // },
        // changeQuantity:(state,action)=>{
        //     state.items=state.items.filter((c)=>c.id === action.payload.id ? (c.qty = action.payload.qty):c.qty)
        // }    
    },
    
})
export const {setfromdate,settodate} = dateSlice.actions;
export default dateSlice.reducer;