import axios from "axios";

export const axiosPublic = axios.create({
    baseURL:'https://learnhub-teal.vercel.app/'
})
const useAxiosPublic = () => {
   return axiosPublic
};

export default useAxiosPublic;
