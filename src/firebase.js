import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDMngK_qD02QW69C4bFhHoRajEX7PsoWCw',
  authDomain: 'the-unreasonable-challenge.firebaseapp.com',
  databaseURL: 'https://the-unreasonable-challenge.firebaseio.com',
  storageBucket: 'the-unreasonable-challenge.appspot.com',
  messagingSenderId: '607801560673'
};

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
export const signIn = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

export const reference = firebase.database().ref('challenges');
