
import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home/Home';
import Main from './Main';
import Listing from './Listing/listingLogic';
import CategoryList from "./Listing/categoryLogic";
import Details from "./Details/detailsLogic";
import PlaceOrder from "./Orders/PlaceOrder";
import ViewOrder from "./Orders/ViewOrder";
import Product from "./Listing/products";

const Routing = ()=>{
    return(
        
        <div>
            <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Main/>}>
                    <Route index element ={<Home/>}/>
                    <Route path='home' element={<Home/>}/>
                    <Route path='listing/:faishontypeId' element={<Listing/>}/>
                    <Route path='categories/:categoryId' element={<CategoryList/>}/>
                    <Route path='/products/:productId' element={<Product/>}/>
                    <Route path='/details' element={<Details/>}/>
                    <Route path='placeOrder/:productId' element={<PlaceOrder/>}/>
                    <Route path='viewOrder' element={<ViewOrder/>}/> 
                    
                    {/* <Route path='listing/:categoryId' element={<Listing/>}/> */}
                </Route>
            </Routes>
            <Footer/>
            </BrowserRouter>
        </div>
        
    )
}
export default Routing;