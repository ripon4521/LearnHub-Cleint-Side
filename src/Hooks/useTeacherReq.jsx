import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "react-query";
import useAxiosSecoure from "./useAxiosSecoure";



const useTeacherReq = () => {
//  transtack query diye load kornbo
const axiosSecure = useAxiosSecoure()
const {user} = useContext(AuthContext);


    const { refetch , data:teacherReq = []}=useQuery({
        queryKey:['teacherReq', user?.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/teacherReq`);
            return res.data;
        
        }
    })
    // console.log(cart);
    return [teacherReq , refetch]
};

export default useTeacherReq;