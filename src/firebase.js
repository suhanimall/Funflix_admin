import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAUsIVbXrehZ9Q-W2Nsh2hV1OVqFzIKdfw",
    authDomain: "funflix-50d72.firebaseapp.com",
    projectId: "funflix-50d72",
    storageBucket: "funflix-50d72.appspot.com",
    messagingSenderId: "379259793638",
    appId: "1:379259793638:web:43923c3c0a4b97311d8b27"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
