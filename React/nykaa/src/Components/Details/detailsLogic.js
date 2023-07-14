import React,{useState,useEffect} from "react";
import axios from 'axios';
import './details.css';
import { useSearchParams, useNavigate } from "react-router-dom";

const base_url ="https://nykaa-api-jfl3.onrender.com"

const DetailDisplay = ()=>{
    let navigate = useNavigate()
    let [searchParams] = useSearchParams()
    let [productDetails,setProductDetails] = useState()
    let productId = searchParams.getAll('productId');
    // let [faishontypeId] = useState(sessionStorage.getItem('faishontypeId'))

    const productDetail = async() => {
        const rdata = await axios.get(`${base_url}/details/${productId}`);
        setProductDetails(rdata.data[0])
    }

    useEffect(()=>{
        productDetail()
    },[])

    const buy = () =>{
        navigate(`/placeOrder/${productDetails.product_name}`)
    }

    const renderDetails = () =>{
        if(productDetails){
            return(
                <>
                <div className="detail-img-div">
                    <div className="detail-image">
                        <img src={productDetails.product_img} alt={productDetails.product_name}/>
                    </div>
                    <div className="details-div">
                        <h1 className="details-heading">{productDetails.product_name}</h1>
                        <h3 className="detail-content">Content:{productDetails.content}</h3>
                        <div><h3 className="detail-content">Ratings:{productDetails.rating}</h3></div>
                        <div> <h3 className="detail-content">MRP:{productDetails.cost}</h3></div>
                        <hr/>
                        <button className="buy-btn"
                        onClick={buy}>Shop Now</button>
                    </div>
                    
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

export default DetailDisplay