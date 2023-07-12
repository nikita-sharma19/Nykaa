import React,{useState,useEffect} from "react";
import axios from 'axios'
import './details.css';
import { useSearchParams } from "react-router-dom";

const base_url ="https://nykaa-api-jfl3.onrender.com"

const Details = ()=>{
    let [searchParams] = useSearchParams()
    let [productDetails,setProductDetails] = useState()
    let productId = searchParams.getAll('productId')

    const renderDetails = ()=>{
        if(productDetails){
            return(
                <>
                <div className="detail-img-div">
                    <div className="detail-image">
                        <img src={productDetails.product_img} alt={productDetails.product_name}/>
                    </div>
                </div>
                </>
            )
        }
    }

    const productDetail = async()=>{
        const prodData = await axios.get(`${base_url}/details/${productId}`)
        setProductDetails(prodData.data)

    }

    useEffect(()=>{
        productDetail()
    },[])

    return(
        <>
        <div className="details-div">
            {renderDetails()}
        </div>
        </>
    )
}

export default Details