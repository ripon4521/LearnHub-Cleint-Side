import Banner from "../Banner/Banner";
import BlcakFriday from "../BlackFriday/BlcakFriday";
import Navbar from "../Navbar/Navbar";


const Home = () => {
    return (
        <>
            <BlcakFriday></BlcakFriday>
           <div className="container mx-auto">
            
           <Navbar></Navbar>
           <Banner></Banner>
           </div>
           
        </>
    );
};

export default Home;