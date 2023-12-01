import { useQuery } from "react-query";
import useAxiosSecoure from "./useAxiosSecoure";
import useAuth from "./useAuth";


const useUploadCourse = () => {
    const axiosSecure = useAxiosSecoure();
    const {user} = useAuth();
   
    const { refetch , data:uploadCourse = []}=useQuery({
        queryKey:['uploadCourse',user?.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/uploadCourse?email=${user?.email}`);
            return res.data;
        
        }
    })

    return [uploadCourse , refetch]
};


export default useUploadCourse;