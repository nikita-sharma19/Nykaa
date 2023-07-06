import React ,{useState,useEffect}from "react";
import './Navbar.css';
import NavDisplay from "./navDisplay";
const base_url ="https://nykaa-api-jfl3.onrender.com";

const Navbar =()=>{
    const [categorytype,setCategorytype] = useState();

    useEffect(()=>{
        fetch(`${base_url}/categories` ,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            setCategorytype(data)
        })
    },[])

    return(
        <>
        <div class="categories">  
            <NavDisplay categoryData={categorytype}/>                          
        </div>                 
        </>
    )
}
export default Navbar;