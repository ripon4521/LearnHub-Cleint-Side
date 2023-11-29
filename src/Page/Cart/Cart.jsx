// import { useQuery } from "react-query";
import { Link } from "react-router-dom";
// import { axiosPublic } from "../../Hooks/useAxiosPublic";
import Card from "./Card";
// import { useContext, useEffect, useState } from "react";
// import { reload } from "firebase/auth";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../providers/AuthProvider";
import useCart from "../../Hooks/useCart";
import useAuth from "../../Hooks/useAuth";



const Cart = () => {
    
    const {user}=useAuth();
    const [cart, refetch]=useCart();
    // console.log(cart);
    // console.log(user);

  


 

  //  const filter = enroll.filter(item => item.email == user?.email);
//    console.log(filter);




//      const handleDelete =(x)=>{
   
//     Swal.fire({
//         title: "Are you sure?",
//         text: "You won't be able to revert this!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, delete it!"
//       }).then((result) => {
//         if (result.isConfirmed) {
//             axiosPublic.delete(`/enroll/${item._id}`)
//       .then(res=>{
//         if (res.data.deletedCount > 0) {
//             Swal.fire({
//                 title: "Deleted!",
//                 text: "Your file has been deleted.",
//                 icon: "success"
//               });
//               refetch()
            
 
//         }
       
//       })
//         }
//       });
    

// }

   // console.log(enroll);

    const sum = cart.reduce((x, y) => x + y.price, 0);
    const TotalPrice = Math.round(sum * 100) / 100;
   
    const vat = (15 / 100) * TotalPrice;
    const withVatTotal= (vat + TotalPrice).toFixed(2) ;

    // console.log(TotalPrice);
    // console.log(withVatTotal);

    // if (isLoading) {
    //     return <span className="loading loading-bars loading-lg"></span>
    // }

    return (
        <div>
           <div className="   mt-10">
               <div className=" p-16  container  rounded bg-slate-300 mx-auto flex flex-col md:flex-row text-left  justify-around"> <h2 className="md:text-5xl text-4xl font-inter font-semibold  drop-shadow-lg ">Buy Now & Checkout</h2>
                <h3 className=" drop-shadow-lg text-left  text-2xl md:text-3xl md:text-right">“Choose From 1000 Best Online <br />
Professional Course Tutorial”</h3></div>

<div className="mt-10">

<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="mx-auto shadow-md p-5 bg-slate-50 max-w-6xl">
      <header className=" flex justify-between items-center p-7  ">
        <h1 className="text-xl font-bold font-inter  sm:text-3xl">{cart.length} COURSES IN CART</h1>
        <Link to='/allclasses' className="text-xl bg-sky-600 text-white px-3 py-2 rounded font-inter font-semibold">Continue Buying</Link>
      </header>
      <hr />

      <div className="mt-8">
        {
            cart.length <= 0 ? 
            <div><h1 className="text-2xl font-inter text-center font-semibold">You Have No Course Added in Here </h1>
              <Link to='/allclasses' className="text-xl  flex justify-center mt-5 bg-sky-600 text-white px-3 py-2 rounded font-inter font-semibold">Continue Buying</Link> :
            </div> :cart.map(x=>  <Card x={x} key={x._id} refetch={refetch} ></Card>) 
        }


        

       {
        cart.length <= 0 ? '' :  <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
            
        <div className="w-screen max-w-lg space-y-4">
        <h1 className="text-3xl text-center font-inter font-semibold text-teal-600">Proceed</h1>
        <hr />
          <dl className="space-y-0.5 text-xl font-bold font-inter text-gray-700">
            <div className="flex justify-between">
              <dt>Price </dt>
              <dd>: ${TotalPrice}</dd>
            </div>

            <div className="flex justify-between pb-2">
              <dt>Platform Charge (15%)</dt>
              <dd>: ${vat.toFixed(2)}</dd>
            </div>


            <hr />
            
            <div className="flex pt-2 font-inter text-xl font-bold justify-between  ">
              <dt>Total</dt>
              <dd>${withVatTotal}</dd>
            </div>
          </dl>

       

          <div className="flex items-center justify-end gap-3">
            <a
              href="#"
              className="block rounded bg-red-700 px-5 py-3 text-xl font-inter font-bold text-gray-100 transition hover:bg-gray-600"
            >
              Checkout
            </a>
            <Link className="px-5 py-3 rounded font-inter text-xl text-white font-semibold bg-sky-500">Cancel</Link>
          </div>
        </div>
      </div>
      
       }
      </div>
    </div>
  </div>
</section>
</div>
          
            </div>
        </div>
    );
};

export default Cart;