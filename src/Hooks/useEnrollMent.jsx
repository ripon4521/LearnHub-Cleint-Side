import { useQuery } from "react-query";
import useAxiosSecoure from "./useAxiosSecoure";
import useAuth from "./useAuth";


const useEnrollMent = () => {
    const axiosSecure = useAxiosSecoure();
    const {user} = useAuth();
   
    const { refetch , data:enrollment = []}=useQuery({
        queryKey:['enrollment',user?.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/enrollment?email=${user?.email}`);
            return res.data;
        
        }
    })

    return [enrollment , refetch]
};


export default useEnrollMent;