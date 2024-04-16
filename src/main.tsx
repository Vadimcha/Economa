import React from 'react';
import ReactDOM from 'react-dom/client'

import '@/app/reset.css'
import '@/app/global.css'
import '@mantine/core/styles.css';
import {Providers} from "./app/providers";
import {router} from "./app/router";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Providers router={router} />
    </React.StrictMode>,
)