import React ,{useState,useEffect} from "react";
import './Shop.css';
import ShopDisplay from './ShopDisplay';

const base_url ="https://nykaa-api-jfl3.onrender.com"
const Shop =()=>{

    const [faishontype,setFaishontype] = useState();
    

    useEffect(()=>{
        fetch(`${base_url}/nykaaFaishon`, {method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            setFaishontype(data)
        })
    },[])
    // console.log(faishontype);
    return(
       <>      
       <div class="home-div">
                        <div className="mainheading"><h2 className="mainheading">Nykaa Faishon</h2></div>
                        <div class="nykaa-faishon">
                            <ShopDisplay faishonData={faishontype}/>                
                        </div>
         </div>                      
       </>
     
    )
}
export default Shop;