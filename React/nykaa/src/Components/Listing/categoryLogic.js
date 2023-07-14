import React, {useState,useEffect}from 'react'
import './category.css';
import CategoryDisplay from './categoryDisplay';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const base_url ="https://nykaa-api-jfl3.onrender.com"

const CategoryList = ()=>{

    let params = useParams();
    const [categoryList,setCategoryList] = useState();

    useEffect(()=>{
        let categoryid = params.categoryId;
        // axios.get(`${base_url}/allProducts?categoryId=${categoryid}`)
        axios.get(`${base_url}/products?categoryId=${categoryid}`)
        .then((res)=>{
            setCategoryList(res.data)
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
            <CategoryDisplay categoryData={categoryList}/>
            
        </div>
        </>
    )

}

export default CategoryList