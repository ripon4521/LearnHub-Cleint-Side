import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecoure from "../../../Hooks/useAxiosSecoure";

import useTeacherReq from "../../../Hooks/useTeacherReq";

import toast from "react-hot-toast";
import useCourse from "../../../Hooks/useCourse";
import Swal from "sweetalert2";



const Classes = () => {
  const [courses,refetch ] = useCourse();
//   console.log(enrollment);
//   const totalPrice = enrollment.reduce((sum, item) => sum + item.price, 0).toFixed(2);
    const {user}=useAuth();

  
    // console.log(rating);
    const axiosSecure=useAxiosSecoure();



    const handleDelete =(item)=>{
   
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/courses/${item?._id}`)
          .then(res=>{
            if (res.data.deletedCount > 0) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
              
                  refetch()
      
            }
           
          })
            }
          });
        
      
      }

  return (
    <div>
         <div className="bg-slate-300 p-16    mt-10">
              <div className="container mx-auto flex  justify-around"> <h2 className="text-6xl font-inter font-semibold  drop-shadow-lg ">Welcome to {user?.displayName} </h2>
               <h3 className=" drop-shadow-lg text-4xl text-right">“Start Your Exceptional Career With Instructory <br /> The Online Teaching Marketplace And eLearning  Platform”</h3></div>

         
           </div>
      <div className="  ">
        <h1 className="text-5xl text-center mt-20 font-inter font-semibold drop-shadow-lg">Total Teachers Request : {courses.length}</h1>
        <p className="text-center text-xl drop-shadow-lg  mt-4 max-w-3xl mx-auto font-inter">“Start Your Exceptional Career With LearnHub
The Online Teaching Marketplace And eLearning Platform”</p>
     
      </div>
      <div className=" bg-sky-200 mt-10  container mx-auto rounded   p-10  shadow-lg">
        <div className="flex justify-around  mb-10   gap-10 w-[992px] ">
         
        
        </div>

        <div className="overflow-x-auto  ">
          <table className="table">
            {/* head */}
         
          <thead className="text-black text-sm ">
              <tr>
                
              <div className="">
              <th></th>
                    <th>#</th>
                  
              <th >Course Name</th>
              </div>
            
            <th>Food Name</th>
                <th>Mentor Name</th>
                <th>Action</th>
             
              </tr>
            </thead>
       
            <tbody>
                {
                    courses.map((item , index) =>   <tr  key={item._id}>
                     
                        
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
                   
                          <button onClick={()=>handleDelete(item)} className="px-2 py-2 rounded text-xl bg-yellow-400 " >Delete </button>
                          </div>




                      

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

export default Classes;
