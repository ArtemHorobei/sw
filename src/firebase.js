import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyBwwffZl09OqzQvu9GtOynqibef2Qh8dXc',
    messagingSenderId: '512270770433'
};

firebase.initializeApp(config);

export default firebase;

export const messaging = firebase.messaging();
