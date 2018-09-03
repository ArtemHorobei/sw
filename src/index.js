import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { messaging } from './firebase';

// firebase.initializeApp({
//     apiKey: "AIzaSyBmYWwsp3iFhVA86khmdeFVdNw-pv8WFLk",
//     messagingSenderId: "512270770433"
// });
//
// const messaging = firebase.messaging();

// const subscribe = () => {
//     messaging.requestPermission()
//         .then(function () {
//             console.log("You get permissons success");
//             messaging.getToken()
//                 .then(function (currentToken) {
//                     console.log(currentToken);
//                 })
//                 .catch(function (err) {
//                     console.warn('При получении токена произошла ошибка.', err);
//                 });
//         })
//         .catch(function (err) {
//             console.warn('Не удалось получить разрешение на показ уведомлений.', err);
//         });
// };
//
// subscribe();

ReactDOM.render(<App />, document.getElementById('root'));

messaging.onMessage(payload => {
    console.log(payload);
});

registerServiceWorker();
