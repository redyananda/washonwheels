import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://famedwave-us.backendless.app/api"
});