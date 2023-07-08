import React,{useState, useEffect}from "react";
import './details.css';
import axios from 'axios';
import { useSearchParams } from "react-router-dom";

const base_url ="https://nykaa-api-jfl3.onrender.com"
const DetailDisplay = ()=>{

    let [searchParams] = useSearchParams()
    let [productDetails, setProductDetails] = useState()
    let prodId = searchParams.getAll('prodId')
    const productDetail = async()=>{
        const prodata = await axios.get(`${base_url}/details/${prodId}`)
        setProductDetails(prodata.data)
    }

    useEffect(()=>{
        productDetail()
    },[])

    return(
        <>
        <div className="main-detail-div">
            <div className="detail-img-div">
                <img src='' alt=''/>
            </div>
            <div className="details">

            </div>
        </div>
        
        </>
    )
}
export default DetailDisplay;