// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyA0MEEjJiQdvlOymY4LwVtljB05uFUyCok",
    authDomain: "pwanotify-192cf.firebaseapp.com",
    projectId: "pwanotify-192cf",
    storageBucket: "pwanotify-192cf.appspot.com",
    messagingSenderId: "165512304301",
    appId: "1:165512304301:web:f736ff92d39f5c2a825824"
  };

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});