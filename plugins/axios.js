import axios from 'axios';

export default defineNuxtPlugin(() => {
    const axiosInstance = axios.create({
        baseURL: 'http://localhost:3000', // APIのベースURLを指定
    });

    return {
        provide: {
            axios: axiosInstance,
        },
    };
});