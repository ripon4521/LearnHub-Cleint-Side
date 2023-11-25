import { Outlet } from "react-router-dom";
import Navbar from "../Page/Home/Navbar/Navbar";
import Footer from "../Page/Home/Footer/Footer";
import BlcakFriday from "../Page/Home/BlackFriday/BlcakFriday";

const Main = () => {
    return (
        <div>
            <BlcakFriday></BlcakFriday>
            <div className="container  mx-auto   bg-slate-800"><Navbar></Navbar></div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;