import axios from 'axios'

export const Api = axios.create({
    //baseURL: "https://tccinfinite.azurewebsites.net/api/"
    baseURL: "https://localhost:5001/api/"
});
