// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/10.5.0/firebase-app-compat.js');
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/10.5.0/firebase-messaging-compat.js');


const firebaseConfig = {
  apiKey: "AIzaSyAKEPcAovTGKGyLYt4IiWgtK2ePZV7VJJ0",
  authDomain: "gpms-9bf3e.firebaseapp.com",
  projectId: "gpms-9bf3e",
  storageBucket: "gpms-9bf3e.appspot.com",
  messagingSenderId: "552692924572",
  appId: "1:552692924572:web:5b051a734e7e2dd41d6d59",
};
// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "./logo.png",
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
