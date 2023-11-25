import { FaAngellist } from "react-icons/fa";

import Regester from "../Regeister/Regester";
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import {   useLocation, useNavigate } from "react-router-dom";



const Login = () => {
    const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const navigate = useNavigate();
    const {  googleLogin } = useContext(AuthContext);

    const handleGoogleLogin = () => {
        googleLogin()
          .then((result) => {
            navigate(from ,{replace:true});
            window.location.reload(true);
        //    console.log(result);
            toast.success('Login SuccesFull', {
                duration: 1000000,
              });
            
           
            console.log(result);
            //   const userinfo ={
            //     email: result.user?.email,
            //     name: result.user?.displayName
            //   }
              
            //   axiosPublic.post('/users',userinfo)
            //   .then(res=>console.log(res))
        
       
    
          })
          .catch((error) => {
            toast.error(error.message, {
              duration: 5000,
            });
          });
      };
















    return (
       
              <div className=" flex justify-center items-center gap-20 ">
                <Toaster></Toaster>
          
            <div className="w-full max-w-sm p-6    rounded-lg  ">
            <div className="flex md:ml-10 lg:ml-0  justify-center  items-center">
    
    <a className=" drop-shadow-lg flex items-center font-inter font-bold gap-1 text-4xl"><span className="text-4xl "><FaAngellist /></span> <span>Learn<span className="bg-[#ffd24d] p-1 rounded  text-black">Hub</span></span></a>
    </div>
    <form  className="mt-6">
        <div>
            <label name="email"  className="block font-roboto text-yellow-500  ">Email</label>
            <input name='email' required type="email" className="block w-full px-4 py-2 mt-2   border rounded-lg   focus:border-yellow-400 dark:focus:border-yellow-300 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>

        <div className="mt-4">
            <div className="flex items-center justify-between">
                <label name="password" className="block font-roboto text-yellow-500  ">Password</label>
                <a href="#" className="font-roboto text-xs text-yellow-500 hover:underline">Forget Password?</a>
            </div>

            <input name='passward' type="password" className="block w-full px-4 py-2 mt-2 border rounded-lg  focus:border-yellow-400 dark:focus:border-yellow-300 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>

        <div className="mt-6">
            <button type='submit' className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-yellow-500 rounded-lg hover:bg-yellow-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Sign In
            </button>
        </div>
    </form>

    <div className="flex items-center justify-between mt-4">
        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

        <a href="#" className="text-xs text-centerfont-roboto text-yellow-500 hover:underline">
            or login with Social Media
        </a>

        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
    </div>

    <div className="flex items-center mt-6 -mx-2">
        <button onClick={handleGoogleLogin}  type="button" className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-yellow-500 rounded-lg hover:bg-yellow-400">
            <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                </path>
            </svg>

            <span className="hidden mx-2 sm:inline">Sign in with Google</span>
        </button>
            <div>
       
</div>
            </div>
            <div className="mt-4">
    <button  onClick={()=>document.getElementById('my_modal_5').showModal()}><a className=" text-center mt-2 font-inter rounded font-semibold  cursor-pointer ">You have dont Account,<span className="text-red-500"> create One</span></a></button>
    <dialog id="my_modal_5" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <div>
        <Regester></Regester>
    </div>
  </div>
</dialog>
    </div>
      
    </div>
    

   

</div>
   
    );
};

export default Login;



