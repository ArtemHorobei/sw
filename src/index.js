import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import firebase from 'firebase/app';
// import 'firebase/messaging';
//
// firebase.initializeApp({ messagingSenderId: '512270770433' });
//
// const messaging = firebase.messaging();
//
// const subscribe = () => {
//     messaging.requestPermission()
//         .then(function () {
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
registerServiceWorker();
