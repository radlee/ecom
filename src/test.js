import firebase from 'firebase/app';
import 'firebase/firestore';


const firestore = firebase.firestore();

// firebase.collection('users').doc(''.collection(cartItems).doc(''))
firestore.doc('/users/userId/cartItems/id');
firestore.collection('/users/userId/cartItems');