import Banner from "../Banner/Banner";
import BlcakFriday from "../BlackFriday/BlcakFriday";
import Collabration from "../Collabration/Collabration";
import CourseCreation from "../CourseCreationBanner/CourseCreation";
import Courses from "../Courses/Courses";
import Navbar from "../Navbar/Navbar";
import TotalUsers from "../TotalUsers/TotalUsers";

const Home = () => {
  return (
    <>
      <BlcakFriday></BlcakFriday>
      <div className="container mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
      <CourseCreation></CourseCreation>
      <div className="container mx-auto"><Courses></Courses> </div>
      <TotalUsers></TotalUsers>
    </>
  );
};

export default Home;
