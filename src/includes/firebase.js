import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyD-3ALPRy3C2_qpZAyn5RGi02XdzYqAsG0',
  authDomain: 'music-486c2.firebaseapp.com',
  projectId: 'music-486c2',
  storageBucket: 'music-486c2.appspot.com',
  messagingSenderId: '215596385803',
  appId: '1:215596385803:web:048940ee1cde3d6806690e',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');
const storage = firebase.storage();

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
