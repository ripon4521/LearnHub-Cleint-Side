import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import img from "../../../assets/Collabration/quote-left 1.png"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import useFeedback from "../../../Hooks/useFeedback";


const Testimonils = () => {
    const [feedback] = useFeedback()
    console.log(feedback);
    const [review,setReview]= useState([])
    useEffect(()=>{
        fetch('review.json')
        .then(res=>res.json())
        .then(data=>{
            setReview(data)
            // console.log(data);
        })
    },[])
    return (
        <section className="my-20 max-w-6xl mx-auto">
           

         <div>
         <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        {
            review.map(item=>   <SwiperSlide key={item._id}
            
            >

                
                <div className="w-[50%] mx-auto">
                <p className="flex justify-center my-10"> 
                <Rating
      style={{ maxWidth: 180 }}
      value={item.rating}
      readOnly
    />
                </p>


                    <img className="mx-auto my-10 " src={img} alt="" />

                   
                    <p className="text-center font-inter">{item.details}</p>
                    <h2 className="text-orange-400  text-center text-2xl font-inter">{item.name}</h2>
                </div>
            </SwiperSlide>)
        }
        
      </Swiper>
         </div>
          
        </section>
    );
};

export default Testimonils;