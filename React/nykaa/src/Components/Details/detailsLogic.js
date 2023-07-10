// import React,{useState, useEffect}from "react";
// import './details.css';
// import axios from 'axios';
// import { useParams } from "react-router-dom";

// const base_url ="https://nykaa-api-jfl3.onrender.com"

// const DetailDisplay = ()=>{

//     let param = useParams();
//     let [productDetails, setProductDetails] = useState()

//     let p = param.id;
//     const productDetail = async()=>{
//         const prodata = await axios.get(`${base_url}/details/:id=${p}`)
//         setProductDetails(prodata.data)
//     }

//     useEffect(()=>{
//         productDetail()
//     },[])

//     return(
//         <>
//         <div className="main-detail-div">
//             <div className="detail-img-div">
//                 <img src='' alt=''/>
//             </div>
//             <div className="details">

//             </div>
//         </div>
        
//         </>
//     )
// }
// export default DetailDisplay;