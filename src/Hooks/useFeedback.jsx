import { useQuery } from "react-query";
import useAxiosSecoure from "./useAxiosSecoure";
import useAuth from "./useAuth";


const useFeedback = () => {
    const axiosSecure = useAxiosSecoure();
    const {user} = useAuth();
   
    const { refetch , data:feedback = []}=useQuery({
        queryKey:['feedback',user?.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/feedback?email=${user?.email}`);
            return res.data;
        
        }
    })

    return [feedback , refetch]
};


export default useFeedback;