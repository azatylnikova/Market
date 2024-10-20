import React from 'react';
import ReactDOM from 'react-dom/client'; // Измените импорт
import App from "./app/App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "app/providers/ThemeProvider";

const container = document.getElementById('root'); // Ваш контейнер
const root = ReactDOM.createRoot(container); // Создание корня

root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
)

