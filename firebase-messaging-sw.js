import firebase from 'firebase/app';
import 'firebase/messaging';

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

importScripts("https://www.gstatic.com/firebasejs/4.12.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/4.12.0/firebase-messaging.js");

let config = {
    messagingSenderId: "512270770433"
};

firebase.initializeApp(config);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(payload => {
    const title = payload.notification.title;
    console.log('payload', payload.notification.icon);
    const options = {
        body: payload.notification.body,
        icon: payload.notification.icon
    };
    return self.registration.showNotification(title, options);
});
