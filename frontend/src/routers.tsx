import {createBrowserRouter} from 'react-router-dom';


import Home from './pages/Home';
import EncontrarDiarista from './pages/Find/encontrar-diarista';

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/encontrar-diarista',
        element: <EncontrarDiarista />
    }
]);