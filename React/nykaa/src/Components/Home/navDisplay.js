import React from 'react';
import {Link} from 'react-router-dom';
const NavDisplay = (props)=>{
    const listCategory =({categoryData}) =>{
        if(categoryData){
           return categoryData.map((item)=>{
            return(
                <Link to={`/listing/${item.category_id}`}>
                     <h3 className="categ-heading">{item.category_name}</h3>
                        <div class="categoryCards">
                            <img src={item.category_img} alt={item.category_name}/>
                        </div>
                </Link>
            )
           })
        }else{
            return(
                <h1>Wait...Data is loading!</h1>
            )
        }
    }
    return(
        <div className="category"> 
            {listCategory(props)}
        </div>   
        )
   
}
export default NavDisplay;