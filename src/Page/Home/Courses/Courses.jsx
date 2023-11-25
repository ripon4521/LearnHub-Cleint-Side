
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import "./course.css"
import CourseCard from "./CourseCard";

const Courses=()=> {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(res=> res.json())
        .then(daa=>setData(daa))
    },[]);

    console.log(data);

    var settings = {
      dots: true,
   
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      swipeToSlide: true,
        
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const highestEnroll = data.sort((a, b) => b.enrol- a.enrol);
// console.log(booksSortedByYearAsc);
// console.log(data);

    return (
      <div className="my-40">
        <h1 className="text-4xl text-center my-20 font-semibold font-inter divider">Highest Selling Courses </h1>
        
        <Slider {...settings}>
            {
                highestEnroll.map(item=> <CourseCard key={item._id} item={item}></CourseCard>)
            }
         
        </Slider>
      </div>
    );
  }

export default Courses