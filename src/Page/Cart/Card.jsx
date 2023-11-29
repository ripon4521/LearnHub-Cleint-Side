import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { axiosPublic } from "../../Hooks/useAxiosPublic";
// import { axiosPublic } from "../../Hooks/useAxiosPublic";
// import Swal from "sweetalert2";


const Card = ({x,refetch }) => {

const handleDelete =(x)=>{
   
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
          axiosPublic.delete(`/enroll/${x._id}`)
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
                 <ul className="space-y-4 mt-10">
          <li className="flex    gap-4">
            <img
              src={x.image}
              alt=""
              className="h-[150px] w-[250px] rounded object-cover"
            />

            <div className="flex-1">
              <h3 className="text-2xl uppercase font-inter font-bold text-gray-900">{x.course_name}</h3>

              <dl className="mt-0.5 space-y-px text-[10px] ">
                <div className="text-xl font-alteria font-semibold">
        {x.mentor_name}
                  
                </div>

                <div>
                  <h1 className="text-xl font-alteria">{x.rating}</h1>
                </div>
              </dl>
            </div>
            <div className="flex-1">
                <h1 className="text-xl font-inter text-red-600">Purchase</h1>
                <h1 className="text-3xl text-teal-600 font-bold font-inter">${x.price}</h1>
            </div>

         

            
      <Link onClick={()=>handleDelete(x)} className="text-gray-600 text-xl font-inter font-bold  transition hover:text-red-600">
                Remove item

             
              </Link>
         

            

       
          </li>

        
          

          
        </ul>
        </div>
    );
};

export default Card;