importScripts('https://www.gstatic.com/firebasejs/3.2.2/firebase.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js');

firebase.initializeApp({
    'messagingSenderId': '512270770433'
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(payload => {
    const title = payload.title;
    const options = {
        body: payload.body,
        icon: payload.icon
    };

    self.registration.showNotification(title, options);
});