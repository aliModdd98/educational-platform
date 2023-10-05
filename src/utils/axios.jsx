import axios from "axios";
import toast from "react-hot-toast";

toast('Welcome !',
  {
    icon: '👏',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
);
const axiosInstance = axios.create({});
axiosInstance.interceptors.request.use(
  (config) => {
    console.log("Done");
    return config;
  },
  (error) => {
    console.log("error");
  }
);
axiosInstance.interceptors.response.use(
  (response) => {
    toast.success("Operation success");
    return response;
  },
  (error) => {
    toast.error(error.message);
  }
);

export default axiosInstance;