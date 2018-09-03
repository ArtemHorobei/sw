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

importScripts('https://www.gstatic.com/firebasejs/3.7.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.7.2/firebase-messaging.js');

firebase.initializeApp({
    messagingSenderId: '512270770433'
});

const messaging = firebase.messaging();

// Customize notification handler
messaging.setBackgroundMessageHandler(function(payload) {
    console.log('Handling background message', payload);

    // Copy data object to get parameters in the click handler
    payload.data.data = JSON.parse(JSON.stringify(payload.data));

    return self.registration.showNotification(payload.data.title, payload.data);
});

self.addEventListener('notificationclick', function(event) {
    const target = event.notification.data.click_action || '/';
    event.notification.close();

    // This looks to see if the current is already open and focuses if it is
    event.waitUntil(clients.matchAll({
        type: 'window',
        includeUncontrolled: true
    }).then(function(clientList) {
        // clientList always is empty?!
        for (var i = 0; i < clientList.length; i++) {
            var client = clientList[i];
            if (client.url === target && 'focus' in client) {
                return client.focus();
            }
        }

        return clients.openWindow(target);
    }));
});


