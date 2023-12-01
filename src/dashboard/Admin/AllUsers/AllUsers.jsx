
// import { useQuery } from "@tanstack/react-query";
import { useQuery } from "react-query";
import useAxoisSecure from "../../../Hooks/useAxiosSecoure";
import { FaRegTrashAlt} from "react-icons/fa";
import {  FaUsers  } from 'react-icons/fa';
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure=useAxoisSecure()
    const {data: users=[] , refetch}=useQuery({
        queryKey:['users'],
        queryFn: async ()=>{
            const res=await axiosSecure.get('/users')
            return res.data
        }
    })
    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res=>{
          console.log(res.data);
          if (res.data.modifiedCount>0) {
            refetch()
            Swal.fire({
              title: "Are you sure?",
              text: `You won't be ${user.name}  Make Admin !`,
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, Make Admin!"
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
              }
            });
          }
        })}

    const handledeleteUser = user =>{
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
                axiosSecure.delete(`/users/${user._id}`)
          .then(res=>{
            if (res.data.deletedCount>0) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                  refetch();
     
            }
           
          })
            }
          });
        


    }
   


    return (
        <div className="mt-10">
           
            <div className="bg-slate-100 mt-10 w-[1112px] ml-60   p-10  shadow-lg">
            <div className=" flex justify-center gap-48 mb-10  w-[992px] ">
          <h1 className="text-3xl font-cinzel text-black font-bold drop-shadow-lg">
            Total Users:{users?.length}
          </h1>
          <h1 className="text-3xl font-cinzel text-black font-bold drop-shadow-lg">
            All Users:{users?.length}
          </h1>
         
        </div>

        <div>
        <div className="overflow-x-auto">
  <table className="table ">
    {/* head */}
    <thead>
      <tr className="text-black text-sm">
        <th></th>
        <th>User Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users?.map((user , i)=><tr key={user._id}>
            <th>{i+1}</th>
            <td>{user?.name}</td>
            <td>{user?.email}</td>
         
            <th>
              {
                user.role === 'admin' ? 'Admin'    : <button onClick={()=>handleMakeAdmin(user)}   className="px-2 py-2 text-2xl text-white rounded bg-[#D1A054]"><FaUsers /></button>
              }
                         
                         
                        </th>
            
            <th>
                          <button  onClick={()=>handledeleteUser(user)} className="px-3 py-2 text-2xl text-white rounded bg-red-600"><FaRegTrashAlt /></button>
                        </th>
          </tr>)
        //    onClick={()=>handledelete(item._id)}
      }

      
   

    </tbody>
  </table>
</div>
        </div>
            </div>
        </div>
    );
};

export default AllUsers;