import React,{useState, useEffect} from 'react';
import './listing.css';
import ListingDisplay from './listingDisplay';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const base_url ="https://nykaa-api-jfl3.onrender.com"

const Listing =()=>{
    let params = useParams();
    const [faishonList,setFaishonList] = useState();

    useEffect(()=>{
        let faishonid = params.faishontypeId;
        axios.get(`${base_url}/faishontype?faishontypeId=${faishonid}`)
        .then((res)=>{
        setFaishonList(res.data)
        })
    },[])

    return(
        <>
        <div class="listingDiv">
            {/* <div class="filter">
                <div class="cuisines">
                    <div></div>
                </div>
            </div> */}
            <ListingDisplay listData={faishonList}/>
        </div>
       
        </>
    )
}

export default Listing;