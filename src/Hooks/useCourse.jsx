import { useQuery } from "react-query";
import useAxiosSecoure from "./useAxiosSecoure";


const useCourse = () => {
    const axiosSecure = useAxiosSecoure();

   
    const { refetch , data:courses = []}=useQuery({
        queryKey:['courses'],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/courses`);
            return res.data;
        
        }
    })

    return [courses , refetch]
};

export default useCourse;