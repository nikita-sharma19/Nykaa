import React from 'react'
import {Link} from 'react-router-dom'
const ProductDisplay = (props)=>{

    const showProducts = ({product}) =>{
        if(product){
            if(product.length>0){
                return product.map((item)=>{
                    return(
                      <Link to={`/products/${item.product_id}`}>
                          <h2>{item.product_name}</h2>
                          <div class="medium">                     
                              <img src={item.product_img} alt={item.product_name}/>
                              <a>shop now</a>
                          </div>                          
                      </Link>                
                  )
              })      
            }
            
        }else{
            return(
                <h1>Data is loading..... Please wait!</h1>
            )
        }
    }


    return(
        <>
        <div class="Bigger">
           {showProducts(props)}
        </div>
        </>
    )
}

export default ProductDisplay