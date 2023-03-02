import Axios from 'axios';

const URL_BASE = 'http://localhost:8080';

export const ApiService = Axios.create({
    baseURL: URL_BASE,
    headers: {
        'Content-Type': 'application/json',
    },
});