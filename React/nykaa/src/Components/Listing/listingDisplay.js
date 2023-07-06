import React from "react";
import {Link} from 'react-router-dom'; 
const ListingDisplay = (props)=>{

const renderData=({listData})=>{
    if(listData){
        if(listData.length>0){
            return(
                listData.map((item)=>{
                    return(
                        <div class="filter-container">
                            <div class="card" key={item._id}>                      
                                 <div class="imageDiv">
                                     <img src={item.product_img} alt={item.product_name}/>
                                </div>
                                <div class="detailsDiv">
                                    <Link to='/'>                   
                                    <div class="detail" title="North Indian, Thalis, Snacks"><h3>{item.product_name}</h3></div>
                                    <div class="cost"><h3>Cost:{item.cost}</h3></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
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
                {renderData(props)}     
        </div>
    )
}

export default ListingDisplay;