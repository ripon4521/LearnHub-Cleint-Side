import { useQuery } from "react-query";
import useAxiosSecoure from "./useAxiosSecoure";

const useUsers = () => {
    const axiosSecure = useAxiosSecoure()
  
    const { refetch , data:users = []}=useQuery({
        queryKey:['users'],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/users`);
            return res.data;
        
        }
    })
    // console.log(cart);
    return [users , refetch]



    
    
}

export default useUsers;