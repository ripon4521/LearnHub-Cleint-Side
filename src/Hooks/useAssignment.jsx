import { useQuery } from "react-query";
import useAxiosSecoure from "./useAxiosSecoure";
import useAuth from "./useAuth";


const useAssignment = () => {
    const axiosSecure = useAxiosSecoure();
    const {user} = useAuth();
   
    const { refetch , data:assighnment = []}=useQuery({
        queryKey:['assighnment',user?.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/assighnment?email=${user?.email}`);
            return res.data;
        
        }
    })

    return [assighnment , refetch]
};


export default useAssignment;