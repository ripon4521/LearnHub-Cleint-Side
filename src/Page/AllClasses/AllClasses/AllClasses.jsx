

import {Helmet} from "react-helmet";

import Banner from "../Banner/Banner";


const AllClasses = () => {
    return (
        <div className="">
               <Helmet>
           
                <title>LearnHub || AllClasses</title>
                
            </Helmet>
          
            <div>
       <Banner></Banner>
            </div>
         
            
        </div>
    );
};

export default AllClasses;