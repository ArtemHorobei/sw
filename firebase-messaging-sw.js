importScripts('https://www.gstatic.com/firebasejs/5.4.2/firebase.js');
importScripts('https://www.gstatic.com/firebasejs/5.4.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.4.2/firebase-messaging.js');

firebase.initializeApp({
    apiKey: 'AIzaSyBwwffZl09OqzQvu9GtOynqibef2Qh8dXc',
    messagingSenderId: '512270770433'
});

const messaging = firebase.messaging();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('https://artemhorobei.github.io/sw/firebase-messaging-sw.js');
}


messaging.setBackgroundMessageHandler(payload => {
    const title = payload.title;
    const options = {
        body: payload.body,
        icon: payload.icon
    };

    self.registration.showNotification(title, options);
});
