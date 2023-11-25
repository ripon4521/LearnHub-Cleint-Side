import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import BlcakFriday from "../BlackFriday/BlcakFriday";
import Collabration from "../Collabration/Collabration";
import CourseCreation from "../CourseCreationBanner/CourseCreation";
import Courses from "../Courses/Courses";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Testimonils from "../Testimonils/Testimonils";
import TotalUsers from "../TotalUsers/TotalUsers";

const Home = () => {
  return (
    <>
       <Helmet>
           
           <title>LearnHub || Home</title>
           
       </Helmet>
      <BlcakFriday></BlcakFriday>
      <div className="container mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
      <CourseCreation></CourseCreation>
      <div className="container mx-auto"><Courses></Courses> </div>
      <TotalUsers></TotalUsers>
      <Testimonils></Testimonils>
      <Footer></Footer>
    </>
  );
};

export default Home;
