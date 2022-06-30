import firebase from 'firebase/app';
import 'firebase/messaging';

var firebaseConfig = {
  apiKey: "AIzaSyA0MEEjJiQdvlOymY4LwVtljB05uFUyCok",
  authDomain: "pwanotify-192cf.firebaseapp.com",
  projectId: "pwanotify-192cf",
  storageBucket: "pwanotify-192cf.appspot.com",
  messagingSenderId: "165512304301",
  appId: "1:165512304301:web:f736ff92d39f5c2a825824"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
const messaging = firebase.messaging();

export const getToken = (setTokenFound) => {
    return messaging.getToken({vapidKey: 'BM3V_olAEsymi3jT50oAv-2CRDyTJXW_v4sjy_xGT59vOv2rNl-sRT1K0nqGrVDIPKYaXzJpDUsbOhtFztF6cgU'}).then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log('No registration token available. Request permission to generate one.');
        setTokenFound(false);
        // shows on the UI that permission is required 
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    });
  }

  export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
});
