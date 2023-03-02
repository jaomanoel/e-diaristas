import Axios from 'axios';

const URL_BASE = import.meta.env.BASE_URL;

export const ApiService = Axios.create({
    baseURL: URL_BASE,
    headers: {
        'Content-Type': 'application/json',
    },
});