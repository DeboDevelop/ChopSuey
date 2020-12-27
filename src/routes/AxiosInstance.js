import axios from 'Axios';

const AxiosInstance = axios.create({
    baseURL: 'https://api.example.com'
});

export default AxiosInstance;