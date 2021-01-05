import axios from "Axios";

const AxiosInstance = axios.create({
    baseURL: "http://localhost:1337",
});

export default AxiosInstance;
