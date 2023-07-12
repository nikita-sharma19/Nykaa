import React from "react";
import Navbar from "./Navbar";
import Shop from "./Shop";
import Products from "./productLogic";
function Home(){
    return(
        <>     
        <Shop/>
        <Navbar/>
        <Products/>
        </>
    )
}
export default Home;