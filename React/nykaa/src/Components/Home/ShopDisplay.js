
import React from 'react';
import{Link} from 'react-router-dom';

const ShopDisplay = (props)=>{
    const listFaishon = ({faishonData}) =>{
        if(faishonData){
            return faishonData.map((item)=>{
                  return(
                    <Link to= {`/listing/${item.faishontype_id}`}>
                        <h2 class="faishon-heading">{item.faishontype_name}</h2>
                        <div class="faishontype">                     
                            <img src={item.faishontype_img} alt={item.faishontype_name}/>
                            {/* <a>shop now</a> */}
                        </div>                          
                    </Link>                  
                )
            })
        }else{
            return(
                <h1>Data is loading..... Please wait!</h1>
            )
        }
    }

   
       

    return(     
    <>
        <div class="content">
           {listFaishon(props)}
        </div>

        
    </>
     ) 
     
}
export default ShopDisplay;