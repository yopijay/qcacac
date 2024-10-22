// Libraries
import React from 'react';
import { createRoot } from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Assets
import 'assets/fonts/font.css';
import 'assets/css/global.css';
import 'assets/css/scrollbar.css';

// Layouts
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <CssBaseline />
        <App />
        <ToastContainer />
    </React.StrictMode>
);