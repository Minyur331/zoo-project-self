import React from 'react';
import { createRoot } from "react-dom/client";
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


const rootEl = document.getElementById('root');
const root = createRoot(rootEl);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
