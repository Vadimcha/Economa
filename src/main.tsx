import React from 'react';
import ReactDOM from 'react-dom/client'

import '@/app/reset.css'
import '@/app/global.css'
import '@mantine/core/styles.css';
import {Providers} from "./app/providers";
import {router} from "./app/router";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap" rel="stylesheet"/>
        <Providers router={router} />
    </React.StrictMode>,
)