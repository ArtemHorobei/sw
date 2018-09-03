import { messaging } from './firebase';

export default function() {
    console.log('get permission');
    messaging.requestPermission()
        .then(() => messaging.getToken())
        .then((token) => {
            console.log('Current user token is ' + token);
        }).catch(console.error)
}