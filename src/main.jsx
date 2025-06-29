import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // <--- ¡ASEGÚRATE DE QUE ESTA LÍNEA ESTÉ AQUÍ!
import App from './App';
import './index.css'; // Tu CSS personalizado, si tienes.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
