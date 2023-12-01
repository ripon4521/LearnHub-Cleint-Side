import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { axiosPublic } from "../../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";


const Teaching = () => {
    const {user}=useContext(AuthContext)
  

    const handleUploadCourse =(e)=>{
        e.preventDefault();
        const form = e.target;
        const course_name=form.name.value;
        const total_enrolment = form.enroll.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const image = form.url.value;
        const short_desc = form.desc.value;
        const mentor_name=user?.displayName;
        const pending='pending';
        const courseInfo ={
            course_name,
            total_enrolment,
            price,
            rating,
            image,
            short_desc,
            mentor_name,
            pending

        }
        axiosPublic.post('/uploadCourse',courseInfo)
        .then(res=> {
            if (res.data.acknowledged == true) {
                toast.success('Course Upload SuccesFull')
            }else{toast.error('Something Went Wrong')}
        })
        // form.reset()
        // console.log(courseInfo);
    }


    return (
        <div>
           
      
            <div className="bg-slate-300 p-16    mt-10">
               <div className="container mx-auto flex  justify-around"> <h2 className="text-6xl font-inter font-semibold  drop-shadow-lg ">Welcome to {user.displayName}</h2>
                <h3 className=" drop-shadow-lg text-4xl text-right">“Start Your Exceptional Career With Instructory <br /> The Online Teaching Marketplace And eLearning  Platform”</h3></div>

          
            </div>
            <div>
            <div className=' '>
   
   <div className="max-w-[85rem] px-4  sm:px-6 lg:px-8 lg:py-14  mx-auto">
     <div className="mx-auto">
       <div className="text-center">
         <h1 className="text-3xl font-inter font-bold divider text-center drop-shadow-lg mt-10  text-black sm:text-6xl dark:text-green"> 
        Upload Your Course Here!
         </h1>
   
         <p className="mt-1 text-black dark:text-black">
     
         </p>
       </div>
   
       <div className="mt-16">
       
         <form onSubmit={handleUploadCourse} >
           <div className="grid gap-4 lg:gap-6">
    
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
               <div>
                 <label className="block drop-shadow-lg text-black mb-2 font-inter text-xl font-bold  ">Course Title</label>
                 <input  required name='name' type="text" className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-black dark:focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write course name here"/>
               </div>
   
               <div>
                 <label  className="block drop-shadow-lg text-black mb-2 text-xl font-bold font-inter">Total Enroll</label>
                 <input  type="text" name='enroll' className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-black dark:focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write total  here"/>
               </div>
   
             </div>
   
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
               <div>
                 <label className="block drop-shadow-lg text-black text-xl font-inter font-bold mb-2 font-roboto ">Price</label>
                 <input name='price' type="text" className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-black dark:focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write price here"/>
               </div>
   
               <div>
                 <label  className="block drop-shadow-lg text-black mb-2 text-xl font-inter font-bold font-roboto">Rating</label>
                 <input  name='rating' type="text" className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-black dark:focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write course rating here"/>
               </div>
             </div>
   
             
               
   
               <div>
                 <label  className="block drop-shadow-lg text-black text-xl font-inter font-bold mb-2 font-roboto">Course Thumbnail URL</label>
                 <input  name='url' type="text" className="block w-full  py-3 font-roboto  border rounded-lg px-11 focus:border-black dark:focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write course photo url here"/>
               </div>
               <div>
                 <label className="block drop-shadow-lg text-xl font-inter font-bold text-black mb-2 font-roboto ">Short Description</label>
                 <input  name='desc' type="text" className="block h-28 w-full py-3 font-roboto  border rounded-lg px-11 focus:border-black dark:focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write course description here"/>
               </div>
         
        
           
           
   
   
  
   
           </div>
         
   
           <div className="mt-6 grid">
             <button  type="submit" className="inline-flex text-xl justify-center items-center gap-x-3 text-center bg-black hover:bg-black border border-transparent font-bold  lg:text-xl text-white font-roboto drop-shadow-lg font-inter rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-green-800">Uplaod Course</button>
           </div>
   
         
         </form>
      
       </div>
     </div>
   </div>
   
           </div>
            </div>
           
        </div>
    );
};

export default Teaching;