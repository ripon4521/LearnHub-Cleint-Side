import BlcakFriday from "../BlackFriday/BlcakFriday";
import Navbar from "../Navbar/Navbar";


const Home = () => {
    return (
        <>
            <BlcakFriday></BlcakFriday>
           <div className="container mx-auto">
            
           <Navbar></Navbar>
           </div>
           
        </>
    );
};

export default Home;