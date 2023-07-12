import React ,{useState,useEffect} from "react";
import ProductDisplay from './productDisplay'
import './product.css'

const base_url ="https://nykaa-api-jfl3.onrender.com"
const Products = ()=>{

    const [products,setProducts] = useState();
    useEffect(()=>{
        
        fetch(`${base_url}/products`, {method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            setProducts(data)
        })
    },[])
    // console.log(faishontype);
    return(
       <>      
       <div class="Biggest">
                        <div className="mainheading"><h2 className="mainheading">Nykaa Faishon</h2></div>
                        <div class="Bigger">
                            <ProductDisplay product={products}/>                
                        </div>
         </div>                      
       </>
    )
    // return(
    //     <>
    //     <ProductDisplay/>
    //     </>
    // )
}

export default Products