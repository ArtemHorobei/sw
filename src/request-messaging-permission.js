import { messaging } from './firebase';

export default function() {
    messaging.requestPermission()
        .then(() => messaging.getToken())
        .then((token) => {
            console.log('Current user token is ' + token);
        }).catch(console.error)
}