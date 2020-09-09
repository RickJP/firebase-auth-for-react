// Your web app's Firebase configuration
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyBb6GTDphPZMquuiKPHCYxwsKF5DtxOBD8',
  authDomain: 'h3webdev-login-auth.firebaseapp.com',
  databaseURL: 'https://h3webdev-login-auth.firebaseio.com',
  projectId: 'h3webdev-login-auth',
  storageBucket: 'h3webdev-login-auth.appspot.com',
  messagingSenderId: '920943827337',
  appId: '1:920943827337:web:711e5279bc1eb8b5d4e958',
  measurementId: 'G-ZH4H0SR0ZV',
};

const firebase = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
