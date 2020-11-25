import firebase from 'firebase/app';
import 'firebase/firestore';


const firestore = firebase.firestore();

// firestore.collection('users').doc('SBP6pYo1PEBlOoLbyIwx').collection('cartItems').doc('HGQKVgzdsoZn25w77fNf')
firestore.doc('/users/SBP6pYo1PEBlOoLbyIwx/cartItems/HGQKVgzdsoZn25w77fNf');
firestore.collection('/users/SBP6pYo1PEBlOoLbyIwx/cartItems');