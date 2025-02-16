import React from 'react';
import { createRoot } from "react-dom/client";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const rootEl = document.getElementById('root');
const root = createRoot(rootEl);

root.render(
    <React.StrictMode>
        <h1>Root Rendered...</h1>
    </React.StrictMode>
);
