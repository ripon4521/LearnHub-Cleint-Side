// import { useQuery } from "@tanstack/react-query";
import { useQuery } from "react-query";
import useAuth from "./useAuth";
// import useAuth from "./useAuth";
import useAxoisSecure from "./useAxiosSecoure";


const useAdmin = () => {
    const {user} = useAuth();
    const axiosSecure = useAxoisSecure();
   const {data: isAdmin, isPending: isAdminLoading}=useQuery({
    queryKey:[user?.email, 'isAdmin'],
    queryFn:async ()=>{
        const res = await axiosSecure.get(`/users/admin/${user.email}`)
        console.log(res.data);
        return res.data?.admin
    }
   })
    return [isAdmin]
};

export default useAdmin;