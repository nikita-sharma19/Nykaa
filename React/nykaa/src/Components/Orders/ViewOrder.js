// import React from 'react';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import DisplayOrder from './DisplayOrder';

const url = "https://nykaa-api-jfl3.onrender.com/orders";

const ViewOrder =()=>{

    const [orders,setOrder] = useState()

    useEffect(()=>{
        axios.get(url).then((res) =>{setOrder(res.data)})
    })

    return(
        <>
        <h1>View Order</h1>
        <DisplayOrder orderData={orders}/>
      </>
        
    )
}

export default ViewOrder