import axios from "axios";


const axiosSecure = axios.create({

    baseURL: 'https://server-lu.vercel.app',
})

const UseAxiosSecure = () => {
    return axiosSecure ;
};

export default UseAxiosSecure;