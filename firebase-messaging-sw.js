importScripts('https://www.gstatic.com/firebasejs/3.6.8/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.6.8/firebase-messaging.js');

firebase.initializeApp({
    apiKey: 'AIzaSyBwwffZl09OqzQvu9GtOynqibef2Qh8dXc',
    messagingSenderId: '512270770433'
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
