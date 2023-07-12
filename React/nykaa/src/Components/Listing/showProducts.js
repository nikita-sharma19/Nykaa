import React from 'react'

const ShowProduct = (props)=>{

    const renderProd=({list})=>{
        if(list){
            if(list.length>0){
                return(
                    list.map((item)=>{
                        return(
                            <>
                              <div class="filter-container">
                                <div class="card" key={item._id}>                   
                                     <div class="imageDiv">
                                         <img src={item.product_img} alt={item.product_name}/>
                                    </div>
                                    <div class="detailsDiv">                        
                                        <div class="detail" title={item.product_name}><h3>{item.product_name}</h3></div>
                                        <div class="cost"><h3>Cost:{item.cost}</h3></div>
                                    </div>  
                                </div>
                            </div>
                            
                            </>
                          
                            
                        )
                    })
                )
            }
            else{
                return(
                    <h1>No Data Found!</h1>
                )
            }
        }
    }
    
        return(  
            <div class="main-div">     
                    {renderProd(props)}     
            </div>
        )




    // return(
    //     <>
    //     <h1>Showing Products</h1>
    //     </>
    // )
}
export default ShowProduct