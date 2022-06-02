import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from "./Components/common/header/header";
import {BrowserRouter} from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
                <App />
        </BrowserRouter>
    </React.StrictMode>

);


