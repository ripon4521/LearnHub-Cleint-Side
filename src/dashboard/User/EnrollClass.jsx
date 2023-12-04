// import { iterate } from "localforage";



import Swal from "sweetalert2";
import useAxoisSecure from "../../Hooks/useAxiosSecoure";

import useEnrollMent from "../../Hooks/useEnrollMent";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { Rating } from "@smastrom/react-rating";
import { useState } from "react";


const Mycart = () => {
  const [enrollment , refetch] = useEnrollMent();
  console.log(enrollment);
//   const totalPrice = enrollment.reduce((sum, item) => sum + item.price, 0).toFixed(2);
    const {user}=useAuth();
    const axiosSecure = useAxoisSecure();
    const [rating, setRating] = useState(0);
    console.log(rating);


    const handleFeedback=(e)=>{
        e.preventDefault();
        const form = e.target;
        const feedback=form.feedback.value;

        const info = {
            feedback,
            rating,
            email : user?.email
        }
        console.log(info);
        axiosSecure.post('/feedback',info)
        .then(res=> {
            if (res.data.acknowledged == true) {
                Swal.fire({
                    title: "Succesfull!",
                    text: "Your Feedback submit succesfull!.",
                    icon: "success"
                  });
            }else{Swal.fire({
                title: "Wrong!",
                text: "Something Went Wrong",
                icon: "warning"
              });}
        })
    }

const handleSubmit=(e)=>{
    e.preventDefault();
    const email = user?.email;
        const form = e.target;
        const title=form.title.value;
        const date = form.date.value;



        const desc = form.desc.value;
        const courseInfo ={
            title,
            date,
          email,
            desc 

        }
        axiosSecure.post('/assignment',courseInfo)
        .then(res=> {
       
            if (res.data.acknowledged == true) {
                console.log(res.data);
                Swal.fire({
                    title: "Succesfull!",
                    text: "Your Assignment submit succesfull!.",
                    icon: "success"
                  });
            }else{Swal.fire({
                title: "Wrong!",
                text: "Something Went Wrong",
                icon: "warning"
              });}
        })

}

  return (
    <div>
         <div className="bg-slate-300 p-16    mt-10">
              <div className="container mx-auto flex  justify-around"> <h2 className="text-6xl font-inter font-semibold  drop-shadow-lg ">Become An Online Instructor</h2>
               <h3 className=" drop-shadow-lg text-4xl text-right">“Start Your Exceptional Career With Instructory <br /> The Online Teaching Marketplace And eLearning  Platform”</h3></div>

         
           </div>
      <div className="  ">
        <h1 className="text-5xl text-center mt-20 font-inter font-semibold drop-shadow-lg">My Enroll Class</h1>
        <p className="text-center text-xl drop-shadow-lg  mt-4 max-w-3xl mx-auto font-inter">“Start Your Exceptional Career With LearnHub
The Online Teaching Marketplace And eLearning Platform”</p>
     
      </div>
      <div className=" bg-sky-200 mt-10  container mx-auto rounded   p-10  shadow-lg">
        <div className="flex justify-around  mb-10   gap-10 w-[992px] ">
          <h1 className="text-3xl font-cinzel text-black font-bold drop-shadow-lg">
            Total Enrollment: {enrollment.length}
          </h1>
        
        </div>

        <div className="overflow-x-auto  ">
          <table className="table">
            {/* head */}
         
          <thead className="text-black text-sm ">
              <tr>
                
              <div className="">
              <th></th>
                    <th>#</th>
                  
              <th >Course Image</th>
              </div>
            
            <th>Course Name</th>
                <th>Mentor Name</th>
                <th>Action</th>
             
              </tr>
            </thead>
       
            <tbody>
                {
                    enrollment.map((item , index) =>   <tr  key={item._id}>
                     
                        
                        <td>
                      
                          <div className="flex gap-5">
                          <div className="text-left">  <th>
                            {index + 1}
                        </th></div>
                            <div className="avatar">
                          
                              <div className="mask mask-squircle  w-12 h-12">
                                <img
                                  src={item.image}
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </div>
                            </div>
                          
                          </div>
                        </td>
                        <td  className="text-xl font-inter font-semibold">
                        {item.course_name}
                         
                        </td>
                        <td className="text-xl font-inter font-semibold">{item.mentor_name}</td>
                        <th className="flex">
                          <div>
                          <button onClick={()=>document.getElementById('my_modal_1').showModal()} className="px-2 py-2 rounded text-xl bg-yellow-400 mr-3 ">FeadBack</button>
                          <dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-2xl text-center  font-inter uppercase">Please Give Your Feedback !</h3>
   <form onSubmit={handleFeedback} >
   <div className="mt-4">
                 <label className="block drop-shadow-lg text-black mb-2 font-inter text-xl font-bold  "> Feedback</label>
                 <input  required name='feedback' type="text" className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-black dark:focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write course name here"/>
               </div>
               <div className="flex justify-center mt-5 ">
               <Rating
      style={{ maxWidth: 280 }}
      value={rating}
      onChange={setRating}
      isRequired
    />
               </div>

               <div className="mt-6 grid">
             <button  type="submit" className="inline-flex text-xl justify-center items-center gap-x-3 text-center bg-black hover:bg-black border border-transparent font-bold  lg:text-xl text-white font-roboto drop-shadow-lg font-inter rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-green-800">Send</button>
    
           </div>

   </form>
  </div>
</dialog>
                          </div>




                        <button className="px-2 py-2 rounded text-xl bg-yellow-400 " onClick={()=>document.getElementById('my_modal_3').showModal()}>Continue </button>

                        <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="  text-3xl drop-shadow-lg uppercase text-center font-inter font-semibold">Create Assignment</h3>
   <div className="py-4">
   <form onSubmit={handleSubmit} >
           <div className="grid gap-4 lg:gap-6">
    
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
               <div>
                 <label className="block drop-shadow-lg text-black mb-2 font-inter text-xl font-bold  "> Title</label>
                 <input  required name='title' type="text" className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-black dark:focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write course name here"/>
               </div>
   
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
               <div>
                 <label className="block drop-shadow-lg text-black text-xl font-inter font-bold mb-2 font-roboto ">Deadline</label>
                 <input name='date' type="date" className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-black dark:focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40" />
               </div>
   
             </div>
   
            
   
             </div>
   
            
               
   
               <div>
                 <label className="block drop-shadow-lg text-xl font-inter font-bold text-black mb-2 font-roboto "> Description</label>
                 <input  name='desc' type="text" className="block h-28 w-full py-3 font-roboto  border rounded-lg px-11 focus:border-black dark:focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write course description here"/>
               </div>
         
        
           
           
   
   
  
   
           </div>
         
   
           <div className="mt-6 grid">
             <button  type="submit" className="inline-flex text-xl justify-center items-center gap-x-3 text-center bg-black hover:bg-black border border-transparent font-bold  lg:text-xl text-white font-roboto drop-shadow-lg font-inter rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-green-800">Send</button>
    
           </div>
   
         
         </form>
   </div>
  </div>
</dialog>
                        </th>
                      </tr>
                )
                }



             
        
            </tbody>
          
            
          </table>
        </div>
      </div>
    </div>
  );
};

export default Mycart;
