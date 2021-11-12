import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import resourceTranslations from './translations/resources.json';
import {BrowserRouter} from "react-router-dom";
import LanguageDetector from 'i18next-browser-languagedetector'

import './index.css';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            ...resourceTranslations,
        },
        lng: "pl",
        fallbackLng: ['en'],
        interpolation: {
            escapeValue: false
        },
        detection: {
            order: ['path'],
            lookupFromPathIndex: 0,
        }
    });

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
