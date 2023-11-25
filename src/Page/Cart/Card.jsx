import { Link } from "react-router-dom";
import { axiosPublic } from "../../Hooks/useAxiosPublic";


const Card = ({item, handleDelete}) => {

    return (
        <div>
                 <ul className="space-y-4 mt-10">
          <li className="flex    gap-4">
            <img
              src={item.image}
              alt=""
              className="h-[150px] w-[250px] rounded object-cover"
            />

            <div className="flex-1">
              <h3 className="text-2xl uppercase font-inter font-bold text-gray-900">{item.course_name}</h3>

              <dl className="mt-0.5 space-y-px text-[10px] ">
                <div className="text-xl font-alteria font-semibold">
        {item.mentor_name}
                  
                </div>

                <div>
                  <h1 className="text-xl font-alteria">{item.rating}</h1>
                </div>
              </dl>
            </div>
            <div className="flex-1">
                <h1 className="text-xl font-inter text-red-600">Purchase</h1>
                <h1 className="text-3xl text-teal-600 font-bold font-inter">${item.price}</h1>
            </div>

         

            
      <Link onClick={()=>handleDelete(item)} className="text-gray-600   transition hover:text-red-600">
                <span className="sr-only">Remove item</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-8 w-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </Link>
         

            

       
          </li>

        
          

          
        </ul>
        </div>
    );
};

export default Card;