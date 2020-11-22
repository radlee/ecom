import  firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {

}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${ userAuth }`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, 
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user ', error.message)
        }
    }

    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthprovider();
provider.setCustomParameters({ prompt: 'select-account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;