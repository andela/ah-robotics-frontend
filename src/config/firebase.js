import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const FacebookProvider = new firebase.auth.FacebookAuthProvider();
export const TwitterProvider = new firebase.auth.TwitterAuthProvider();
