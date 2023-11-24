
import { MdFavorite, MdOutlineShoppingCart, MdShare, MdStar } from "react-icons/md";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const CourseCard = ({item}) => {
    return (
        <div className="flex  ">
           <div className=" h-[400px] overflow-hidden bg-white rounded-lg shadow-lg 800">
    <img className="object-cover object-center w-full h-56" src={item.image} alt="avatar"/>

   
    <div className="px-6 py-4">
        <div className="flex items-center justify-between">
        <h1 className="text-sm font-semibold ">{item.mentor_name}</h1>
        <div className="flex gap-3 text-purple-500 cursor-pointer text-xl">
           <span className="text-yellow-500"> <MdOutlineShoppingCart></MdOutlineShoppingCart></span>
            <span className="text-orange-600"><MdFavorite></MdFavorite></span>
 <span>           <MdShare/></span>
           <span className="text-sky-500"> <MdStar></MdStar></span>
        </div>
        </div>

        <p className="py-2 text-xl font-inter font-semibold ">{item.course_name}</p>
        <div className="w-[200px] text-xl flex items-center00 ">
        <Rating
      
      value={item.rating}
      readOnly
    />({item.enrol})

  
        </div>
        
        <div className="flex items-center justify-between mt-2">
            <h2 className="text-2xl mt-3 font-bold font-inter text-emerald-600">{item.price}$</h2>
            <button className="px-3 mt-2 text-white py-2 text-xl font-inter font-semibold rounded  bg-gradient-to-r from-yellow-500 to-yellow-600">Buy Now</button>
        </div>
      
    </div>
</div>
        </div>
    );
};

export default CourseCard;