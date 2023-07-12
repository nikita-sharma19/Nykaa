import React, {useState, useEffect} from 'react'
import ShowProduct from './showProducts'
import './listing.css';
import {useParams} from 'react-router-dom';
import axios from 'axios';


const base_url ="https://nykaa-api-jfl3.onrender.com"

const Product = ()=>{

    let params = useParams();
    // let navigate = useNavigate();
    const [list,setList] = useState();

    useEffect(()=>{
        // sessionStorage.setItem('faishontypeId',faishonid)
        let id = params.productId;
        axios.get(`${base_url}/products?productId=${id}`)
        .then((res)=>{
        setList(res.data)
        })
    },[])

    // const proceed =()=>{
    //     navigate(`/placeOrder/${list.product_name}`)
    // }

    return(
        <>
        <div class="listingDiv">
            <ShowProduct list={list}/>  
        </div>
        {/* <div className='col-md-12'>
            <button className='btn btn-success'
            onClick={proceed}>Proceed</button>
        </div>   */}
        </>
    )

    // return(
    //     <>
    //     <ShowProduct/>
    //     </>
    // )
}
export default Product