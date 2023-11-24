import Banner from "../Banner/Banner";
import BlcakFriday from "../BlackFriday/BlcakFriday";
import Collabration from "../Collabration/Collabration";
import CourseCreation from "../CourseCreationBanner/CourseCreation";
import Navbar from "../Navbar/Navbar";


const Home = () => {
    return (
        <>
            <BlcakFriday></BlcakFriday>
           <div className="container mx-auto">
            
      
      <Navbar></Navbar>
  
           <Banner></Banner>
    
           </div>
           <CourseCreation></CourseCreation>
           <div>
            {/* <Collabration></Collabration> */}
           </div>
           
        </>
    );
};

export default Home;