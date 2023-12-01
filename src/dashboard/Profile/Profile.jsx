import { FaEdit, FaFacebook, FaInstagram, FaLinkedin, FaPlay, FaStar, FaTwitter, FaUser } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useCart from "../../Hooks/useCart";
import useEnrollMent from "../../Hooks/useEnrollMent";
import useFeedback from "../../Hooks/useFeedback";
import useUploadCourse from "../../Hooks/useUploadCourse";


const Profile = () => {
    const {user}= useAuth();
    console.log(user);
    const [enrollment ]=useEnrollMent();
    const [feedback ]=useFeedback();
    const [uploadCourse ]=useUploadCourse();
    return (
        <div>
       <div className="bg-slate-300 p-16    mt-10">
               <div className="container mx-auto flex  justify-around"> <h2 className="text-6xl font-inter font-semibold  drop-shadow-lg ">Welcome to {user?.
displayName
} </h2>
                <h3 className=" drop-shadow-lg text-4xl text-right">“Start Your Exceptional Career With Instructory <br /> The Online Teaching Marketplace And eLearning  Platform”</h3></div>

          
            </div>

                <div className="flex justify-around mt-20 bg-sky-200 p-10 container mx-auto">
                    
                    <div className="flex   gap-40">
                           <div>
                           <img className="w-72 rounded-full" src={user.photoURL} alt="" />
                          <div className="flex text-3xl items-center mt-4 justify-center gap-5">
                           <p className="cursor-pointer text-red-500"><FaFacebook></FaFacebook></p>
                           <p className="cursor-pointer text-red-500"><FaInstagram></FaInstagram></p>
                           <p className="cursor-pointer text-red-500"><FaLinkedin></FaLinkedin></p>
                           <p className="cursor-pointer text-red-500"><FaTwitter></FaTwitter></p>
                          </div>
                           </div>
                            <div className="mt-14 ">
                            <h2 className="text-3xl font-inter uppercase font-bold">{user.displayName}</h2>
                                <p className="flex items-center mt-2 text-2xl font-inter gap-2"><FaStar></FaStar> {feedback.length} Star Rating</p>
                                <p className="flex items-center mt-2 text-2xl font-inter gap-2"><FaUser></FaUser> {enrollment.length} Enrollments</p>
                                <p className="flex items-center mt-2 text-2xl font-inter gap-2"><FaPlay></FaPlay>{uploadCourse.length} Course</p>
                            </div>
                    </div>
                    
                    <div>
                         <h3 className="uppercase mt-14 text-3xl font-inter text-black font-bold">About me</h3>  
                         <p className="text-xl font-inter flex items-center gap-3 mt-4">You have not updated your bio yet. <FaEdit className="text-3xl text-red-500 cursor-pointer"></FaEdit></p>     
                    </div>
                </div>

        </div>
    );
};

export default Profile;