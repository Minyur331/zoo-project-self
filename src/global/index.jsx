import React from 'react';
import { createRoot } from "react-dom/client";

import router from './routes/router';

import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { RouterProvider } from 'react-router';
import './fontawesome-free-6.7.2-web/css/all.css';


const rootEl = document.getElementById('root');
const root = createRoot(rootEl);

root.render(
    <React.StrictMode>
        <RouterProvider router= {router} />
    </React.StrictMode>
);