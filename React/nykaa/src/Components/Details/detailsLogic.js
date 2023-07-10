import React,{useState, useEffect}from "react";
import './details.css';
import axios from 'axios';
import { useSearchParams } from "react-router-dom";

const base_url ="https://nykaa-api-jfl3.onrender.com"

const DetailDisplay = ()=>{

   let [searchParams] = useSearchParams();
   let [productDetails, setProductDetails] = useState()
   let productid = searchParams.getAll('productId')
    const productDetail = async()=>{
        const prodata = await axios.get(`${base_url}/details/${productid}`)
        setProductDetails(prodata.data)
    }
    useEffect(()=>{
        productDetail()
    },[])

    const renderDetails = ()=>{
        if(productDetails){
           return(
            <>
             <div className="detail-img-div">
                <img src={productDetails.product_img} alt={productDetails.product_name}/>
            </div>
            <div className="details">

            </div>
            </>
           )

        }
    }

    return(
        <>
        <div className="main-detail-div">
            {renderDetails()}
        </div>
        
        </>
    )
}
export default DetailDisplay;