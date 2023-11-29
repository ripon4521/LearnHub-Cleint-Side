// import { useQuery } from "@tanstack/react-query";

// import useAuth from "./useAuth";
// import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "react-query";
import useAxiosSecoure from "./useAxiosSecoure";



const useCart = () => {
//  transtack query diye load kornbo
const axiosSecure = useAxiosSecoure()
const {user} = useContext(AuthContext);


    const { refetch , data:cart = []}=useQuery({
        queryKey:['cart', user?.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/enroll?email=${user?.email}`);
            return res.data;
        
        }
    })
    console.log(cart);
    return [cart , refetch]
};

export default useCart;