// Initialize Firebase
import firebase from 'firebase/app';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyCq-o4wTS0kK6FwAjTh40z5TTV1G_Be7gs",
    authDomain: "erphelpdesk-e43c9.firebaseapp.com",
    databaseURL: "https://erphelpdesk-e43c9.firebaseio.com",
    projectId: "erphelpdesk-e43c9",
    storageBucket: "erphelpdesk-e43c9.appspot.com",
    messagingSenderId: "408489092677"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  const auth = firebase.auth();

  export {
    auth,
  };