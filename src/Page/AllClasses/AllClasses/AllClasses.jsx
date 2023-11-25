
import React from "react";
import {Helmet} from "react-helmet";
import BlcakFriday from "../../Home/BlackFriday/BlcakFriday";
import Footer from "../../Home/Footer/Footer";
import Navbar from "../../Home/Navbar/Navbar";
import Banner from "../Banner/Banner";


const AllClasses = () => {
    return (
        <div>
               <Helmet>
           
                <title>LearnHub || AllClasses</title>
                
            </Helmet>
            <BlcakFriday></BlcakFriday>
            <div className="container mx-auto"><Navbar></Navbar></div>
            <div>
       <Banner></Banner>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default AllClasses;