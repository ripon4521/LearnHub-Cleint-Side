import { useQuery } from "react-query";
import useAxiosSecoure from "./useAxiosSecoure";


const useSales = () => {
    const axiosSecure = useAxiosSecoure()
    const { refetch , data:sales = []}=useQuery({
        queryKey:['sales' ],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/sales`);
            return res.data;
        
        }
    })

    return [sales , refetch]
};

export default useSales;