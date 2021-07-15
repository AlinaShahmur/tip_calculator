import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';


i18n
  .use(initReactI18next) 
  .use(LanguageDetector)
  .use(HttpApi) 
  .init({
    supportedLngs: ['en', 'he'],
    detection: {
      order: ['cookie','localStorage','htmlTag','querystring', 'path', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json'
    },
    fallbackLng: "en",
    react: {useSuspense: false}
  });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
