import React from 'react';

import {BrowserRouter} from 'react-router-dom';
import Main from "./app/components/Main";

const AppRouter = () => (
    <BrowserRouter>
        <Main/>
    </BrowserRouter>
);

export default AppRouter;