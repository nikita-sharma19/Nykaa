import React,{useState,useEffect} from 'react';
import './details.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {searchParams, useSearchParams} from 'react-router-dom';

const base_url ="https://nykaa-api-jfl3.onrender.com";

const DetailDisplay = ()=>{

    let [searchParams] = useSearchParams();

    let [productDetails, setProductDetails] = useState();

    return(
        <>
        <div className='main-detail-div'>
            <div className='details-div'>
               <div className='detail-img-div'>
                    <img className="detail-image" src=''/>
               </div>
               <div className='details'>
                <p className='detail-para'></p>
               </div>
            </div>
        </div>
        </>
    )

}
export default DetailDisplay;